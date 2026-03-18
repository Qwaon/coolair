"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
}

interface Errors {
  name?: string;
  phone?: string;
}

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Введите имя (минимум 2 символа)";
    }
    const phoneClean = form.phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      newErrors.phone = "Введите корректный номер телефона";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const token = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TG_CHAT_ID;

    if (token && chatId) {
      const text =
        `📥 Новая заявка с сайта ClimaTech07\n\n` +
        `👤 Имя: ${form.name}\n` +
        `📞 Телефон: ${form.phone}`;

      try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        });
        const data = await res.json();
        if (!data.ok) {
          console.error("Telegram error:", data);
          setStatus("error");
          return;
        }
      } catch (err) {
        console.error("Telegram fetch error:", err);
        setStatus("error");
        return;
      }
    } else {
      console.warn("Telegram env vars not set:", { token: !!token, chatId: !!chatId });
    }

    setStatus("success");
    setForm({ name: "", phone: "" });
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "";
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
    if (digits.length <= 7)
      return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9)
      return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  if (status === "error") {
    return (
      <div className="text-center py-10">
        <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="size-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 text-balance">Ошибка отправки</h3>
        <p className="text-slate-500 mb-6 text-pretty text-sm">
          Не удалось отправить заявку. Позвоните нам напрямую:
        </p>
        <a
          href="tel:+79993001787"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mb-4"
        >
          +7 (999) 300-17-87
        </a>
        <br />
        <Button variant="outline" onClick={() => setStatus("idle")} className="rounded-xl mt-4">
          Попробовать снова
        </Button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 text-balance">Заявка принята!</h3>
        <p className="text-slate-500 mb-6 text-pretty">
          Перезвоним вам в течении дня.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="rounded-xl"
        >
          Отправить ещё
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
          Ваше имя
        </Label>
        <Input
          id="name"
          placeholder="Введите имя"
          value={form.name}
          onChange={(e) => {
            setForm((p) => ({ ...p, name: e.target.value }));
            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
          }}
          className={cn(
            "h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400",
            errors.name && "border-red-400 bg-red-50"
          )}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
          Номер телефона
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={form.phone}
          onChange={(e) => {
            setForm((p) => ({ ...p, phone: formatPhone(e.target.value) }));
            if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
          }}
          className={cn(
            "h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400",
            errors.phone && "border-red-400 bg-red-50"
          )}
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Отправляем…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Получить расчёт
          </span>
        )}
      </Button>

      <p className="text-center text-xs text-slate-400">
        Отправляя форму, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
