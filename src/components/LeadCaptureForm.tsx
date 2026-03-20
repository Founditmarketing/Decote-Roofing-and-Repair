import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Roofing Repair',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', phone: '', service: 'Roofing Repair' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setSubmitError(`Error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#004AAC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
      
      <h3 className="text-2xl font-bold text-black mb-2 uppercase tracking-tight">Request an Estimate</h3>
      <p className="text-gray-600 mb-6 text-sm">Fill out the form below and we'll get back to you shortly.</p>
      
      {isSubmitted ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3 font-medium">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          Thank you! We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {submitError}
            </div>
          )}

          <div>
            <label htmlFor="lead-name" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              id="lead-name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              id="lead-email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Phone Number</label>
            <input
              type="tel"
              id="lead-phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="(318) 555-0123"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="lead-service" className="block text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Service Needed</label>
            <select
              id="lead-service"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#004AAC] focus:border-[#004AAC] outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option>Roofing Repair</option>
              <option>New Roof Installation</option>
              <option>Commercial Roofing</option>
              <option>Metal Roof Installation</option>
              <option>Siding &amp; Gutters</option>
              <option>Steel Fabrication</option>
              <option>Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#004AAC] text-white py-4 px-6 rounded font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 group mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Sending...
                <Loader2 className="w-4 h-4 animate-spin" />
              </>
            ) : (
              <>
                Get Free Estimate
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
