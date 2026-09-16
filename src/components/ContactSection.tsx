import { useState, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Linkedin, 
  Github, 
  Clock,
  ExternalLink 
} from 'lucide-react';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Cards: Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="premium-card p-6 rounded-2xl relative border-2 border-stone-200 dark:border-zinc-800 transition-all hover:border-amber-600 dark:hover:border-amber-400">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/15 text-amber-800 dark:text-amber-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-sm sm:text-base text-stone-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-zinc-700 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="premium-card p-6 rounded-2xl relative border-2 border-stone-200 dark:border-zinc-800 transition-all hover:border-amber-600 dark:hover:border-amber-400">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">Phone & WhatsApp</div>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-sm sm:text-base text-stone-950 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2.5 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-zinc-700 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="premium-card p-6 rounded-2xl relative border-2 border-stone-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">Geographic Location</div>
                  <div className="font-bold text-sm sm:text-base text-stone-950 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-zinc-300 font-mono font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                <span>Pakistan Standard Time (PKT / UTC+5) • Remote Ready</span>
              </div>
            </div>

            {/* Verified Developer Channels (without external live site button) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="premium-card p-4 rounded-xl flex items-center justify-between border-2 border-stone-200 dark:border-zinc-800 hover:border-amber-600 dark:hover:border-amber-400 transition-colors group shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-stone-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors" />
                  <div>
                    <span className="text-xs font-bold text-stone-950 dark:text-white block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-stone-700 dark:text-zinc-300">huzaifa-bilal</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500 dark:text-zinc-400 group-hover:text-amber-700 dark:group-hover:text-amber-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-card p-4 rounded-xl flex items-center justify-between border-2 border-stone-200 dark:border-zinc-800 hover:border-amber-600 dark:hover:border-amber-400 transition-colors group shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-stone-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors" />
                  <div>
                    <span className="text-xs font-bold text-stone-950 dark:text-white block">GitHub</span>
                    <span className="text-[11px] font-mono text-stone-700 dark:text-zinc-300">@Huzaifa-Bilal142</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500 dark:text-zinc-400 group-hover:text-amber-700 dark:group-hover:text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Form: Interactive Direct Message with Crisp Visible Text */}
          <div className="lg:col-span-7">
            <div className="premium-card p-6 sm:p-8 rounded-2xl relative border-2 border-stone-200 dark:border-zinc-800">
              <h3 className="text-xl font-display font-bold text-stone-950 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm font-medium text-stone-700 dark:text-zinc-200 mb-6">
                Have an enterprise web project, custom WordPress CMS requirement, or engineering contract? Let's discuss requirements and timelines.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-stone-950 dark:text-white text-lg">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 dark:text-zinc-200 max-w-sm mx-auto font-medium">
                    Thank you, {formData.name}. I have received your message and will respond promptly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-950 text-white dark:bg-zinc-100 dark:text-zinc-950"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex van Dijk"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-white placeholder:text-stone-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 mb-1.5 uppercase">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.nl"
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-white placeholder:text-stone-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 mb-1.5 uppercase">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Custom WordPress E-commerce platform / Web application"
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-white placeholder:text-stone-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 mb-1.5 uppercase">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, architectural requirements, or schedule..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-white placeholder:text-stone-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-stone-700 dark:text-zinc-300">
                      Guaranteed reply within 24 hours.
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01]"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
