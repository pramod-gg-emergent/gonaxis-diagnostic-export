import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CalendarCheck,
  Clock,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const SECTORS = [
  { id: "artisan", label: "Artisan", time: "+6,5 h", money: "+1 850 €" },
  { id: "commercant", label: "Commerçant", time: "+5 h", money: "+1 400 €" },
  { id: "restaurateur", label: "Restaurateur", time: "+8 h", money: "+2 300 €" },
  { id: "tpe", label: "TPE / PME", time: "+4,5 h", money: "+1 100 €" },
];

const CHIPS = [
  { id: "temps", icon: Clock, label: "Temps", value: "+6,5 h / sem.", tone: "text-[#0D9488] bg-teal-50", pos: "md:left-0 md:top-0" },
  { id: "marge", icon: TrendingUp, label: "Marge", value: "+18 %", tone: "text-[#FF6B4B] bg-orange-50", pos: "md:right-0 md:top-32" },
  { id: "suivi", icon: Users, label: "Suivi client", value: "Relances auto", tone: "text-sky-600 bg-sky-50", pos: "md:left-0 md:bottom-4" },
  { id: "achats", icon: ShoppingCart, label: "Achats", value: "-14 % de coûts", tone: "text-teal-700 bg-teal-50", pos: "md:right-0 md:bottom-16" },
  { id: "organisation", icon: CalendarCheck, label: "Organisation", value: "Zéro oubli", tone: "text-slate-600 bg-slate-100", pos: "md:right-16 md:top-6 lg:right-24" },
];

const Chip = ({ chip, delay }) => {
  const Icon = chip.icon;
  return (
    <motion.div
      data-testid={`hero-chip-${chip.id}`}
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`glass-card absolute z-20 hidden items-center gap-3 rounded-2xl px-4 py-3 md:flex ${chip.pos}`}
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${chip.tone}`}>
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span>
        <span className="block text-xs font-medium text-slate-500">{chip.label}</span>
        <span className="block text-sm font-bold text-[#0B192C]">{chip.value}</span>
      </span>
    </motion.div>
  );
};

export const HeroVisual = () => {
  const [sector, setSector] = useState(SECTORS[0]);

  return (
    <div data-testid="hero-visual" className="relative mx-auto max-w-lg md:px-12 md:pb-12 md:pt-16 lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12)_0%,rgba(255,107,75,0.05)_50%,transparent_100%)]"
      />

      <div className="glass-card relative z-10 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2537] to-[#0D9488]">
              <Activity className="h-4.5 w-4.5 text-white" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-[#0B192C]">Aperçu diagnostic</p>
              <p className="text-xs text-slate-500">Vos gains potentiels</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-[#0D9488]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488] [animation:pulse-dot_1.8s_ease-in-out_infinite]" />
            En direct
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" data-testid="hero-sector-picker">
          {SECTORS.map((s) => (
            <button
              key={s.id}
              type="button"
              data-testid={`hero-sector-${s.id}`}
              onClick={() => setSector(s)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                sector.id === s.id
                  ? "bg-[#0F2537] text-white shadow-md shadow-slate-900/15"
                  : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-[#0D9488]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-4">
            <p className="text-xs font-medium text-slate-500">Temps récupéré / semaine</p>
            <motion.p
              key={sector.id + "-time"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="hero-stat-time"
              className="font-display mt-1 text-2xl font-extrabold text-[#0D9488] sm:text-3xl"
            >
              {sector.time}
            </motion.p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                key={sector.id + "-time-bar"}
                initial={{ width: "12%" }}
                animate={{ width: "72%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#0D9488] to-[#0EA5E9]"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-4">
            <p className="text-xs font-medium text-slate-500">Gains estimés / mois</p>
            <motion.p
              key={sector.id + "-money"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              data-testid="hero-stat-money"
              className="font-display mt-1 text-2xl font-extrabold text-[#FF6B4B] sm:text-3xl"
            >
              {sector.money}
            </motion.p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                key={sector.id + "-money-bar"}
                initial={{ width: "12%" }}
                animate={{ width: "58%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#FF6B4B] to-[#F97316]"
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Estimation indicative, calculée selon votre profil d'activité.
        </p>
      </div>

      {CHIPS.map((chip, i) => (
        <Chip key={chip.id} chip={chip} delay={i * 0.7} />
      ))}

      <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
        {CHIPS.slice(0, 4).map((chip) => {
          const Icon = chip.icon;
          return (
            <div
              key={chip.id}
              data-testid={`hero-chip-mobile-${chip.id}`}
              className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${chip.tone}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[11px] font-medium text-slate-500">{chip.label}</span>
                <span className="block text-xs font-bold text-[#0B192C]">{chip.value}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
