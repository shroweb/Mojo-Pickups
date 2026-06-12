import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  pickupType: z.string().optional(),
  message: z.string().min(10, "Please tell Marc what you're looking for"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickupType: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactFormData) {
    setSubmitted(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-contact-header">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Get in Touch
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Contact
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              You'll be talking directly to Marc — the person who will wind your pickup. No sales team, no waiting rooms, no scripts. Just a genuine conversation about tone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24" data-testid="section-contact-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-10"
              >
                <motion.div custom={0} variants={fadeUp}>
                  <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4" data-testid="info-email">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                        <a
                          href="mailto:info@mojopickups.co.uk"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          info@mojopickups.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4" data-testid="info-location">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                        <p className="text-foreground">Ripponden, West Yorkshire</p>
                        <p className="text-muted-foreground text-sm">United Kingdom</p>
                      </div>
                    </div>
                    <div className="flex gap-4" data-testid="info-build-time">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Current Build Time</p>
                        <p className="text-foreground">40–45 working days</p>
                        <p className="text-muted-foreground text-sm">All pickups made to order</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div custom={1} variants={fadeUp}>
                  <h3 className="font-serif text-lg font-semibold mb-4">Follow Mojo</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/Mojopickups/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid="link-facebook"
                    >
                      <SiFacebook className="w-5 h-5" /> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/mojopickups"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid="link-instagram"
                    >
                      <SiInstagram className="w-5 h-5" /> Instagram
                    </a>
                  </div>
                </motion.div>

                <motion.div custom={2} variants={fadeUp} className="p-6 bg-card border border-white/5">
                  <h3 className="font-serif text-lg font-semibold mb-3">EU Customers</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Mojo Pickups is available in the EU via our official dealer. This avoids import duties and delays.
                  </p>
                  <a
                    href="https://www.boutiqueguitarpickups.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                    data-testid="link-eu-dealer"
                  >
                    boutiqueguitarpickups.com
                  </a>
                </motion.div>

                <motion.div custom={3} variants={fadeUp} className="p-6 bg-card border border-white/5">
                  <h3 className="font-serif text-lg font-semibold mb-3">Pricing Note</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All Mojo Pickups prices are ex-VAT. UK customers should add 20% VAT. Please note that international orders may be subject to import duties in your country.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-24 gap-6"
                  data-testid="success-message"
                >
                  <CheckCircle className="w-16 h-16 text-primary" />
                  <h2 className="font-serif text-3xl font-bold">Message sent.</h2>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Thank you for getting in touch. Marc will read your message personally and respond as soon as he can.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="font-serif text-2xl font-bold mb-8">Send a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  className="bg-card border-white/10 focus:border-primary rounded-none h-12"
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  {...field}
                                  className="bg-card border-white/10 focus:border-primary rounded-none h-12"
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Phone (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+44 ..."
                                  {...field}
                                  className="bg-card border-white/10 focus:border-primary rounded-none h-12"
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="pickupType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Pickup Type (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. Strat 50s, PAF, Gold Foil"
                                  {...field}
                                  className="bg-card border-white/10 focus:border-primary rounded-none h-12"
                                  data-testid="input-pickup-type"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell Marc about your guitar, what you play, and the sound you're chasing..."
                                rows={7}
                                {...field}
                                className="bg-card border-white/10 focus:border-primary rounded-none resize-none"
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                        data-testid="button-submit"
                      >
                        Send Message
                      </button>

                      <p className="text-xs text-muted-foreground">
                        All prices are excluding VAT. UK customers should add 20%. Current build time is 40–45 working days.
                      </p>
                    </form>
                  </Form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
