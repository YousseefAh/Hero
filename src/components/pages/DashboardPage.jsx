"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
const DASHBOARD_PASSWORD = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || "beprime2026";

// ─── Password Gate ───
function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem("bp_dash_auth", "1");
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}>
      
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />
      </div>

      <form onSubmit={handleSubmit}
        className={`relative w-full max-w-sm ${shaking ? "animate-shake" : ""}`}>
        
        <div className="text-center mb-8">
          <Image
            src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
            alt="BePrime" width={120} height={40}
            className="mx-auto mb-4 w-auto h-8 object-contain"
          />
          <h1 className="text-white text-xl font-bold">Dashboard</h1>
          <p className="text-white/30 text-sm mt-1">أدخل كلمة السر</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-[1px] rounded-2xl">
            <div className="w-full h-full rounded-2xl" style={{ background: "#0D0F15" }} />
          </div>
          <div className="relative p-6">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="كلمة السر"
              autoFocus
              className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all duration-300 focus:bg-white/[0.05] ${
                error ? "border-red-500/50" : "border-white/[0.07] focus:border-[#C6FF00]/40"
              }`}
            />
            {error && <p className="text-red-400 text-xs mt-2">كلمة السر غلط</p>}

            <button type="submit"
              className="w-full mt-4 py-3 rounded-xl font-bold text-sm text-[#1E1B22] transition-all duration-300 hover:shadow-[0_0_30px_rgba(198,255,0,0.3)]"
              style={{ background: "linear-gradient(135deg, #C6FF00, #a8e600)" }}>
              دخول
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}

// ─── Status Badge ───
function StatusBadge({ status }) {
  const isDone = status?.includes("✅") || status?.includes("تم");
  const isCancelled = status?.includes("❌") || status?.includes("ملغي");

  let classes = "px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ";
  if (isDone) classes += "bg-green-500/15 text-green-400 border border-green-500/20";
  else if (isCancelled) classes += "bg-red-500/15 text-red-400 border border-red-500/20";
  else classes += "bg-amber-500/15 text-amber-400 border border-amber-500/20";

  return <span className={classes}>{status || "—"}</span>;
}

// ─── Status Actions (clickable buttons) ───
const STATUS_OPTIONS = [
  { label: "✅ مؤكد", value: "تم الدفع ✅" },
  { label: "⏳ انتظار", value: "في الانتظار ⏳" },
  { label: "❌ ملغي", value: "ملغي ❌" },
];

const CONTACTED_OPTIONS = [
  { label: "✅ تم التواصل", value: "تم التواصل ✅" },
  { label: "❌ لم يتم", value: "لم يتم ❌" },
];

function ColumnActions({ row, field, colNum, options, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const currentValue = row[field];

  const handleUpdate = async (newValue) => {
    setUpdating(true);
    setOpen(false);
    try {
      const params = new URLSearchParams({
        action: "update",
        row: row._row,
        col: colNum,
        value: newValue,
      });
      await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, { mode: "no-cors" });
      onUpdate(row._row, field, newValue);
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <StatusBadge status={currentValue} />
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          disabled={updating}
          className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 hover:bg-white/[0.1] hover:text-white/60 transition-all disabled:opacity-30"
        >
          {updating ? (
            <div className="w-3 h-3 border border-white/20 border-t-white/60 rounded-full animate-spin" />
          ) : (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-full mt-1 z-20 bg-[#1a1c24] border border-white/[0.1] rounded-lg shadow-xl overflow-hidden min-w-[120px]">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleUpdate(opt.value)}
                  className="w-full text-right px-3 py-2 text-xs text-white/60 hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Stat Card ───
function StatCard({ label, value, icon, color = "#C6FF00" }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
      <div className="relative p-4 sm:p-5 border border-white/[0.06] rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/30 text-xs">{label}</span>
          <span className="text-lg" style={{ filter: "grayscale(0)" }}>{icon}</span>
        </div>
        <p className="font-display font-bold text-2xl sm:text-3xl" style={{ color }}>{value}</p>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───
export default function DashboardPage() {
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check session
  useEffect(() => {
    if (sessionStorage.getItem("bp_dash_auth") === "1") {
      setAuthed(true);
    }
  }, []);

  // Fetch data
  const fetchData = useCallback(async () => {
    if (!GOOGLE_SHEET_URL) {
      setError("Google Sheet URL not configured");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${GOOGLE_SHEET_URL}?action=read`);
      const data = await res.json();
      setRows(data.rows || []);
    } catch (err) {
      console.error("Failed to fetch:", err);
      setError("فشل في تحميل البيانات");
    } finally {
      setLoading(false);
    }
  }, []);

  // Update any cell optimistically
  const handleCellUpdate = useCallback((rowNum, field, newValue) => {
    setRows((prev) =>
      prev.map((r) => (r._row === rowNum ? { ...r, [field]: newValue } : r))
    );
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

  // Stats
  const total = rows.length;
  const waiting = rows.filter((r) => r.status?.includes("انتظار") || r.status?.includes("⏳")).length;
  const confirmed = rows.filter((r) => r.status?.includes("✅") || r.status?.includes("تم")).length;
  const totalRevenue = rows
    .filter((r) => r.status?.includes("✅") || r.status?.includes("تم"))
    .reduce((sum, r) => sum + (parseFloat(r.price) || 0), 0);

  return (
    <div className="min-h-screen" dir="rtl"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}>
      
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
              alt="BePrime" width={100} height={36}
              className="w-auto h-6 sm:h-7 object-contain"
            />
            <div className="w-px h-6 bg-white/10" />
            <h1 className="text-white/70 text-sm font-medium">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={fetchData}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs hover:bg-white/[0.08] hover:text-white/60 transition-all">
              <svg className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              تحديث
            </button>
            <button onClick={() => { sessionStorage.removeItem("bp_dash_auth"); setAuthed(false); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 text-xs hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/20 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              خروج
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <StatCard label="إجمالي الطلبات" value={total} icon="📋" color="#C6FF00" />
          <StatCard label="في الانتظار" value={waiting} icon="⏳" color="#F59E0B" />
          <StatCard label="مؤكد" value={confirmed} icon="✅" color="#22C55E" />
          <StatCard label="الإيرادات (ج.م)" value={totalRevenue.toLocaleString("ar-EG")} icon="💰" color="#C6FF00" />
        </div>

        {/* Table */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
          <div className="relative border border-white/[0.06] rounded-2xl">
            {/* Table header label */}
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
              <h2 className="text-white/70 text-sm font-semibold">الطلبات</h2>
              <span className="text-white/20 text-xs">{total} طلب</span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-[#C6FF00]/20 border-t-[#C6FF00] rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            ) : rows.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white/20 text-sm">لا توجد طلبات بعد</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">التاريخ</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">الاسم</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">الموبايل</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">المنصة</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">الخطة</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">السعر</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">الدفع</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">المرجع</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">الحالة</th>
                      <th className="text-right text-white/30 font-medium text-[11px] px-4 py-3 whitespace-nowrap">التواصل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i}
                        className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3.5 text-white/25 text-xs whitespace-nowrap">{row.date}</td>
                        <td className="px-4 py-3.5 text-white/80 text-xs font-medium whitespace-nowrap">{row.fullName}</td>
                        <td className="px-4 py-3.5 text-white/50 text-xs whitespace-nowrap font-mono" dir="ltr">{row.phone}</td>
                        <td className="px-4 py-3.5 text-white/40 text-xs whitespace-nowrap">{row.platformName || "—"}</td>
                        <td className="px-4 py-3.5 text-white/50 text-xs whitespace-nowrap">{row.planName}</td>
                        <td className="px-4 py-3.5 text-[#C6FF00]/80 text-xs font-bold whitespace-nowrap">{row.price} ج.م</td>
                        <td className="px-4 py-3.5 text-white/40 text-xs whitespace-nowrap">{row.paymentMethod}</td>
                        <td className="px-4 py-3.5 text-white/25 text-[10px] font-mono whitespace-nowrap" dir="ltr">{row.referenceId}</td>
                        <td className="px-4 py-3.5 whitespace-nowrap"><ColumnActions row={row} field="status" colNum={10} options={STATUS_OPTIONS} onUpdate={handleCellUpdate} /></td>
                        <td className="px-4 py-3.5 whitespace-nowrap"><ColumnActions row={row} field="contacted" colNum={11} options={CONTACTED_OPTIONS} onUpdate={handleCellUpdate} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-white/10 text-xs">
            يمكنك تغيير الحالة مباشرة من{" "}
            <a href="https://docs.google.com/spreadsheets/d/1t1xwryO5jqs4tVQemm4TPJqqkX6SkU9sFau087oqdYI/edit" 
              target="_blank" rel="noopener noreferrer"
              className="text-[#C6FF00]/30 hover:text-[#C6FF00]/60 underline underline-offset-2 transition-colors">
              Google Sheet
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
