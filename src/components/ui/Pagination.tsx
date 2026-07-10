"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-20 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="w-11 h-11 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#1B5E20] hover:text-[#1B5E20] disabled:opacity-30 disabled:hover:border-zinc-200 disabled:hover:text-zinc-400 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-11 h-11 text-[13px] font-bold transition-all duration-300 ${
            currentPage === i + 1
              ? "bg-[#252A34] text-white shadow-lg"
              : "bg-white text-zinc-500 border border-zinc-200 hover:border-[#1B5E20] hover:text-[#1B5E20]"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-11 h-11 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#1B5E20] hover:text-[#1B5E20] disabled:opacity-30 disabled:hover:border-zinc-200 disabled:hover:text-zinc-400 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
