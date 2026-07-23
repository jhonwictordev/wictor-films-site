import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { budgetOptions, serviceOptions } from "../data/siteData.js";
import { submitBudgetRequest, validateBudgetForm } from "../utils/formHandlers.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const initialFormData = {
  name: "",
  company: "",
  whatsapp: "",
  city: "",
  serviceType: "",
  projectDate: "",
  projectLocation: "",
  budget: "",
  message: "",
};

export default function QuoteForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateBudgetForm(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setIsSubmitting(true);
    await submitBudgetRequest(formData);
    setIsSubmitting(false);
    setSuccess(true);
    setFormData(initialFormData);
  };

  return (
    <section id="orcamento" className="relative overflow-hidden border-y border-white/10 bg-[#111111] py-24 md:py-32">
      <div className="absolute inset-0 subtle-grid opacity-[0.08]" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Orçamento"
          title="Conte o que você quer produzir. A resposta vem com direção clara."
          description="Preencha o formulário para receber um orçamento personalizado, sem compromisso e preparado para a realidade do seu projeto."
        />

        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-5xl rounded-lg border border-white/[0.12] bg-carbon/[0.92] p-5 shadow-glow md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Nome" name="name" value={formData.name} error={errors.name} onChange={updateField} required />
              <Input label="Empresa (opcional)" name="company" value={formData.company} onChange={updateField} />
              <Input label="WhatsApp" name="whatsapp" value={formData.whatsapp} error={errors.whatsapp} onChange={updateField} required placeholder="(82) 99179-8754" />
              <Input label="Cidade" name="city" value={formData.city} error={errors.city} onChange={updateField} required />
              <Select label="Tipo de serviço" name="serviceType" value={formData.serviceType} error={errors.serviceType} onChange={updateField} required options={serviceOptions} />
              <Input label="Data prevista" name="projectDate" type="date" value={formData.projectDate} error={errors.projectDate} onChange={updateField} required />
              <Input label="Local do projeto" name="projectLocation" value={formData.projectLocation} error={errors.projectLocation} onChange={updateField} required />
              <Select label="Orçamento aproximado" name="budget" value={formData.budget} error={errors.budget} onChange={updateField} required options={budgetOptions} />
              <label className="md:col-span-2">
                <FieldLabel text="Mensagem" required />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  rows="6"
                  className="field mt-2 min-h-36 resize-y px-4 py-3"
                  placeholder="Fale sobre o objetivo do vídeo, local, duração, referências ou qualquer detalhe importante."
                  required
                  aria-invalid={Boolean(errors.message)}
                />
                <ErrorMessage message={errors.message} />
              </label>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
              <p className="max-w-xl text-sm leading-7 text-mist">
                Integração preparada para serviço de formulário, WhatsApp ou backend próprio.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-carbon transition duration-300 hover:-translate-y-1 hover:bg-platinum disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                Solicitar orçamento
              </button>
            </div>

            {success && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-white/[0.18] bg-white/[0.08] p-4 text-white" role="status" aria-live="polite">
                <CheckCircle2 className="mt-1 shrink-0" size={20} />
                <div>
                  <strong className="block text-sm">Solicitação enviada com sucesso.</strong>
                  <span className="mt-1 block text-sm text-mist">Recebemos as informações e o próximo passo é enviar um orçamento personalizado.</span>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FieldLabel({ text, required = false }) {
  return (
    <span className="text-sm font-semibold text-white">
      {text}
      {required && <span className="text-mist"> *</span>}
    </span>
  );
}

function ErrorMessage({ message }) {
  return message ? <span className="mt-2 block text-sm text-white/80">{message}</span> : null;
}

function Input({ label, name, value, onChange, error, required = false, type = "text", placeholder = "" }) {
  return (
    <label>
      <FieldLabel text={label} required={required} />
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="field mt-2 h-12 px-4"
        required={required}
        aria-invalid={Boolean(error)}
      />
      <ErrorMessage message={error} />
    </label>
  );
}

function Select({ label, name, value, onChange, error, required = false, options }) {
  return (
    <label>
      <FieldLabel text={label} required={required} />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="field mt-2 h-12 px-4"
        required={required}
        aria-invalid={Boolean(error)}
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorMessage message={error} />
    </label>
  );
}
