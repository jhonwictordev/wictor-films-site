const requiredFields = [
  "name",
  "whatsapp",
  "city",
  "serviceType",
  "projectDate",
  "projectLocation",
  "budget",
  "message",
];

const fieldLabels = {
  name: "Nome",
  whatsapp: "WhatsApp",
  city: "Cidade",
  serviceType: "Tipo de serviço",
  projectDate: "Data prevista",
  projectLocation: "Local do projeto",
  budget: "Orçamento aproximado",
  message: "Mensagem",
};

export function validateBudgetForm(formData) {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!String(formData[field] || "").trim()) {
      errors[field] = `${fieldLabels[field]} é obrigatório.`;
    }
  });

  const phoneDigits = String(formData.whatsapp || "").replace(/\D/g, "");
  if (formData.whatsapp && phoneDigits.length < 10) {
    errors.whatsapp = "Digite um WhatsApp com DDD.";
  }

  return errors;
}

export async function submitBudgetRequest(formData) {
  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
    source: "wictor-films-site",
  };

  console.info("Budget request ready for a form service or backend:", payload);

  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ok: true, payload }), 650);
  });
}
