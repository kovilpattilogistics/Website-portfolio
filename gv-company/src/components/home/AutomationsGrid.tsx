"use client";

import { motion } from "framer-motion";
import { Receipt, ShoppingBag, AlertTriangle, Truck, Calendar, MessageSquare, PieChart, Users, Bell, Check } from "lucide-react";

export default function AutomationsGrid() {
    return (
        <section className="py-24 bg-stone-950 border-t border-stone-900">
            <div className="container-luxury px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-4 block">Systemize Everything</span>
                    <h2 className="font-heading text-display-lg text-white mb-6">Automations that work while you sleep.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">

                    {/* 1. WhatsApp Billing (Double Width) */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 relative bg-stone-900/50 rounded-3xl border border-stone-800 p-8 overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500">
                                <Receipt className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp Billing</h3>
                            <p className="text-stone-400 text-sm max-w-xs">Send professional PDF invoices directly to customer's WhatsApp instantly.</p>
                        </div>
                        {/* Fake UI */}
                        <div className="absolute top-8 right-8 w-48 bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-3 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <div className="bg-emerald-500/20 p-2 rounded-lg rounded-tl-none w-3/4">
                                <div className="h-2 w-full bg-emerald-500/40 rounded mb-1"></div>
                                <div className="h-2 w-1/2 bg-emerald-500/40 rounded"></div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-stone-800 p-2 rounded-lg rounded-tr-none w-2/3 border border-stone-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 rounded bg-red-400/20"></div>
                                        <div className="h-1 w-10 bg-stone-600 rounded"></div>
                                    </div>
                                    <div className="h-6 w-full bg-stone-700/50 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Low Stock Alerts (Single) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-gradient-to-br from-rose-900/20 to-stone-900 rounded-3xl border border-stone-800 p-6 flex flex-col justify-between group overflow-hidden"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <AlertTriangle className="w-8 h-8 text-rose-500" />
                                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                            </div>
                            <h3 className="font-bold text-white text-lg">Low Stock</h3>
                        </div>
                        <div className="bg-stone-950/50 rounded-lg p-3 border border-stone-800 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center">🥛</div>
                                <div className="flex-1">
                                    <div className="text-xs text-stone-300">Milk</div>
                                    <div className="text-[10px] text-rose-400 font-bold">Only 2 left!</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Analytics (Single) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-stone-900/50 rounded-3xl border border-stone-800 p-6 relative overflow-hidden group"
                    >
                        <PieChart className="w-8 h-8 text-indigo-400 mb-4" />
                        <h3 className="font-bold text-white text-lg mb-1">Daily Profits</h3>
                        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end gap-1 px-6 pb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            {[30, 50, 45, 70, 60, 90].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-500 rounded-t-sm" />
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Order Tracking (Double) */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 bg-stone-900/50 rounded-3xl border border-stone-800 p-8 flex items-center justify-between group"
                    >
                        <div className="max-w-xs">
                            <Truck className="w-8 h-8 text-stone-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Live Tracking</h3>
                            <p className="text-stone-400 text-sm">Customers can track their delivery in real-time without calling you.</p>
                        </div>
                        <div className="hidden sm:block relative">
                            <div className="w-32 h-32 rounded-full border-2 border-dashed border-stone-700 flex items-center justify-center relative">
                                <div className="absolute w-3 h-3 bg-white rounded-full top-0 -mt-1.5 shadow-[0_0_10px_white]"></div>
                                <div className="text-xs text-stone-500 font-mono">12 min</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 5. Smart Booking (Single) */}
                    <motion.div
                        className="md:col-span-1 bg-stone-900/50 rounded-3xl border border-stone-800 p-6 group hover:border-gold/30 transition-colors"
                    >
                        <Calendar className="w-8 h-8 text-gold mb-4" />
                        <h3 className="font-bold text-white text-lg">Auto-Booking</h3>
                        <p className="text-stone-500 text-xs mt-2">Reminders sent automatically.</p>
                    </motion.div>

                    {/* 6. CRM (Single) */}
                    <motion.div
                        className="md:col-span-1 bg-stone-900/50 rounded-3xl border border-stone-800 p-6 group hover:border-emerald-500/30 transition-colors"
                    >
                        <Users className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="font-bold text-white text-lg">CRM</h3>
                        <p className="text-stone-500 text-xs mt-2">Know your top customers.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
