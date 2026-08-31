import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/constants';
import { SectionHeading } from '../components/SectionHeading';
import { ContactSubmissionData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmissionData>({
    fullName: '',
    email: '',
    phone: '',
    audience: 'General Query',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const updateField = (field: keyof ContactSubmissionData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = 'Enter a valid email address';
    if (formData.phone && formData.phone.replace(/\D/g, '').length < 7) errs.phone = 'Enter a valid phone number';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Top Banner */}
      <section className="bg-[#102A43] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            We’re here to help you build great education teams.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are a school leader seeking staff or an educator looking for your next career move, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2463A7] block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl font-extrabold text-[#102A43]">
                  Our Contact Channels
                </h2>
                <p className="mt-2 text-sm text-[#627D98] leading-relaxed">
                  Reach out via email, phone, or submit an enquiry using the form. Our consultants aim to respond within 24–48 business hours.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-[#D9E2EC] shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#627D98] block">
                      Physical Presence
                    </span>
                    <span className="text-sm font-bold text-[#102A43] block mt-0.5">
                      {COMPANY_INFO.officeAddress}
                    </span>
                    <span className="text-xs text-[#627D98]">Serving Harare, Bulawayo & Regional Zimbabwe</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#D9E2EC] shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#627D98] block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-sm font-bold text-[#2463A7] hover:underline block mt-0.5"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                    <span className="text-xs text-[#627D98]">For school staffing & candidate inquiries</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#D9E2EC] shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#627D98] block">
                      Telephone & WhatsApp
                    </span>
                    <span className="text-sm font-bold text-[#102A43] block mt-0.5">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-xs text-[#627D98]">Use the enquiry form or official email while these channels are being verified.</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#D9E2EC] shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF4F8] text-[#2463A7] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#627D98] block">
                      Operating Hours
                    </span>
                    <span className="text-sm font-bold text-[#102A43] block mt-0.5">
                      {COMPANY_INFO.businessHours}
                    </span>
                    <span className="text-xs text-[#627D98]">Closed on public holidays & weekends</span>
                  </div>
                </div>
              </div>

              {/* Registration notice */}
              <div className="p-4 bg-[#EEF4F8] rounded-xl border border-[#D9E2EC] text-xs text-[#627D98]">
                <div className="font-bold text-[#102A43] mb-1">Company Details:</div>
                <p>Bright Start Edu Recruitment (Pty) Ltd</p>
                <p>Registration No. {COMPANY_INFO.registrationNumber}</p>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#D9E2EC] shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF4F0] text-[#3D8061] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#102A43]">
                      Message Preview Complete
                    </h3>
                    <p className="text-xs sm:text-sm text-[#627D98] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#102A43]">{formData.fullName}</strong>. This development preview has validated your message, but it has not been sent. Please email us directly for current assistance.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          audience: 'General Query',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="mt-4 px-6 py-2.5 bg-[#102A43] text-white text-xs font-bold rounded-lg hover:bg-[#1E3A56] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900" role="note"><strong>Development preview:</strong> this form does not send messages yet. Please use the email address shown on this page.</p>
                    <div className="border-b border-[#D9E2EC] pb-3 mb-4">
                      <h3 className="text-lg font-bold text-[#102A43]">Send us a message</h3>
                      <p className="text-xs text-[#627D98]">Fill in the details below and we will get back to you.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        I am contacting as:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['A School / Employer', 'An Educator / Candidate', 'General Query'].map((aud) => (
                          <button
                            key={aud}
                            type="button"
                            onClick={() => updateField('audience', aud)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border text-center transition-all ${
                              formData.audience === aud
                                ? 'bg-[#102A43] text-white border-[#102A43]'
                                : 'bg-[#F8F7F3] text-[#627D98] border-[#D9E2EC] hover:text-[#102A43]'
                            }`}
                          >
                            {aud}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-full-name" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                          Full Name <span className="text-[#B91C1C]">*</span>
                        </label>
                        <input
                          id="contact-full-name"
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'contact-full-name-error' : undefined}
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          placeholder="e.g. Chipo Ndlovu"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                        />
                        {errors.fullName && <p id="contact-full-name-error" className="text-xs text-[#B91C1C] mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                          Email Address <span className="text-[#B91C1C]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="e.g. chipo@example.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                        />
                        {errors.email && <p id="contact-email-error" className="text-xs text-[#B91C1C] mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="contact-phone"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="e.g. +263 77 000 0000"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                        />
                        {errors.phone && <p id="contact-phone-error" className="mt-1 text-xs text-[#B91C1C]">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => updateField('subject', e.target.value)}
                          placeholder="e.g. Staffing Inquiry for Term 2"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        Your Message <span className="text-[#B91C1C]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        rows={4}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Tell us how we can help your school or career..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#2463A7]"
                      />
                      {errors.message && <p id="contact-message-error" className="text-xs text-[#B91C1C] mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#F4B942]" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white border-t border-[#D9E2EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Common Questions & Answers"
            subtitle="Clear details on our policies, fees, verification processes, and candidate services."
            centered={true}
          />

          <div className="mt-10 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#F8F7F3] rounded-xl border border-[#D9E2EC] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#102A43] text-sm"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#2463A7] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#627D98] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#627D98] leading-relaxed border-t border-[#D9E2EC]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
