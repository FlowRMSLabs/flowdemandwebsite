"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

type FormData = {
  companyType: string;
  goal: string;
  goalOther: string;
  channels: string[];
  description: string;
  networkSize: string;
  companyName: string;
  contactName: string;
  email: string;
};

const TOTAL_STEPS = 6;

const companyTypes = [
  { id: "manufacturer", label: "Manufacturer", desc: "We make products sold through reps and distributors" },
  { id: "rep-agency", label: "Rep Agency", desc: "We represent manufacturers in assigned territories" },
  { id: "distributor", label: "Distributor", desc: "We stock and sell to contractors and end users" },
];

const campaignGoals = [
  { id: "product-launch", label: "New Product Launch" },
  { id: "clearance", label: "Inventory Clearance" },
  { id: "spiff", label: "Commission Spiff Program" },
  { id: "rebate", label: "Rebate / Incentive Push" },
  { id: "event", label: "Counter Days / Lunch & Learns" },
  { id: "brand", label: "Brand Awareness" },
  { id: "spec", label: "Specification Campaign" },
  { id: "seasonal", label: "Seasonal / Quarterly Push" },
];

const channelOptions = [
  { id: "linkedin", label: "LinkedIn" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "handwritten", label: "Handwritten Mailers" },
  { id: "ads", label: "Digital Ads" },
  { id: "podcast", label: "Podcast" },
  { id: "social", label: "Social Media" },
  { id: "events", label: "Events / Trade Shows" },
];

const networkSizes = [
  { id: "small", label: "Small", desc: "10 or fewer rep firms" },
  { id: "medium", label: "Medium", desc: "11–20 rep firms" },
  { id: "large", label: "Large", desc: "Over 20 rep firms" },
];

export default function CampaignWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyType: "",
    goal: "",
    goalOther: "",
    channels: [],
    description: "",
    networkSize: "",
    companyName: "",
    contactName: "",
    email: "",
  });

  const update = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (id: string) => {
    const arr = formData.channels;
    update("channels", arr.includes(id) ? arr.filter((v) => v !== id) : [...arr, id]);
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.companyType !== "";
      case 1: return formData.goal !== "" && (formData.goal !== "other" || formData.goalOther.trim() !== "");
      case 2: return formData.channels.length > 0;
      case 3: return formData.description.trim() !== "";
      case 4: return formData.networkSize !== "";
      case 5: return formData.companyName.trim() !== "" && formData.contactName.trim() !== "" && formData.email.trim() !== "";
      default: return false;
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const advance = () => {
    if (canProceed()) {
      if (step < TOTAL_STEPS - 1) {
        setStep((s) => s + 1);
      } else {
        handleSubmit();
      }
    }
  };

  if (submitted) {
    return (
      <section id="campaign" className="py-24 bg-background grid-pattern">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-white p-12 shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-6">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              We&apos;ll be in touch
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team will review your campaign brief and reach out within one
              business day to discuss strategy and next steps.
            </p>
            <div className="rounded-xl bg-muted/50 p-6 text-left space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Company:</span>{" "}
                <span className="font-medium">{formData.companyName}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Goal:</span>{" "}
                <span className="font-medium">
                  {campaignGoals.find((g) => g.id === formData.goal)?.label}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Channels:</span>{" "}
                <span className="font-medium">
                  {formData.channels
                    .map((id) => channelOptions.find((c) => c.id === id)?.label)
                    .join(", ")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="campaign" className="py-24 bg-background grid-pattern">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles size={14} />
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Run Your First Campaign
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answer a few quick questions and we&apos;ll design a campaign
            tailored to your network.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Step {step + 1} of {TOTAL_STEPS}</span>
            <span>{Math.round(((step + 1) / TOTAL_STEPS) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={false}
              animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {/* Step 0: Company type */}
              {step === 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">What best describes your company?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    This helps us tailor the campaign to your channel structure.
                  </p>
                  <div className="space-y-3">
                    {companyTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => update("companyType", type.id)}
                        className={`selection-card w-full text-left rounded-xl border p-5 transition-all ${
                          formData.companyType === type.id
                            ? "selected border-primary shadow-md"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <p className="font-semibold">{type.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Goal */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">What&apos;s the goal?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Pick the primary objective for this campaign.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {campaignGoals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => update("goal", goal.id)}
                        className={`selection-card text-left rounded-xl border px-5 py-4 transition-all ${
                          formData.goal === goal.id
                            ? "selected border-primary shadow-md"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <p className="font-semibold text-sm">{goal.label}</p>
                      </button>
                    ))}
                    <button
                      onClick={() => update("goal", "other")}
                      className={`selection-card text-left rounded-xl border px-5 py-4 transition-all ${
                        formData.goal === "other"
                          ? "selected border-primary shadow-md"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <p className="font-semibold text-sm">Other</p>
                    </button>
                  </div>
                  {formData.goal === "other" && (
                    <input
                      type="text"
                      value={formData.goalOther}
                      onChange={(e) => update("goalOther", e.target.value)}
                      placeholder="Describe your campaign goal..."
                      className="mt-4 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      autoFocus
                    />
                  )}
                </div>
              )}

              {/* Step 2: Channels */}
              {step === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">Which channels do you want to use?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Select all that apply. We&apos;ll coordinate across every channel you choose.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {channelOptions.map((channel) => (
                      <button
                        key={channel.id}
                        onClick={() => toggleChannel(channel.id)}
                        className={`selection-card flex items-center gap-3 text-left rounded-xl border px-5 py-4 transition-all ${
                          formData.channels.includes(channel.id)
                            ? "selected border-primary shadow-md"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        {formData.channels.includes(channel.id) && (
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                        )}
                        <p className="font-semibold text-sm">{channel.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Description */}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">Describe your campaign</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Give us a brief overview of what you&apos;re trying to do. The more
                    context, the better we can help.
                  </p>
                  <textarea
                    value={formData.description}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder="e.g. We're launching a new LED troffer line and want to get it in front of every electrical contractor in our territory. We have 30 rep agencies and want them all promoting it simultaneously with email, LinkedIn posts, and handwritten notes to their top accounts..."
                    rows={6}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    autoFocus
                  />
                </div>
              )}

              {/* Step 4: Network size */}
              {step === 4 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">How big is your rep/distributor network?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    This helps us scope the campaign and plan distribution.
                  </p>
                  <div className="space-y-3">
                    {networkSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => update("networkSize", size.id)}
                        className={`selection-card w-full text-left rounded-xl border p-5 transition-all ${
                          formData.networkSize === size.id
                            ? "selected border-primary shadow-md"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <p className="font-semibold">{size.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{size.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Contact info */}
              {step === 5 && (
                <div>
                  <h3 className="text-xl font-bold mb-2">Last step — how do we reach you?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    We&apos;ll be in touch within one business day.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => update("companyName", e.target.value)}
                        placeholder="e.g. Acuity Brands"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        autoFocus
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => update("contactName", e.target.value)}
                        placeholder="Full name"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between px-8 py-5 border-t border-border bg-muted/30">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                step === 0
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              disabled={step === 0}
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <button
              onClick={advance}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                canProceed()
                  ? step === TOTAL_STEPS - 1
                    ? "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg"
                    : "bg-primary text-white hover:bg-primary/90 shadow-md"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              disabled={!canProceed()}
            >
              {step === TOTAL_STEPS - 1 ? (
                <>
                  <Send size={16} />
                  Submit Campaign Brief
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
