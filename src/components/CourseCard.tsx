// app/src/components/CourseCard.tsx //
"use client";
import React from "react";

// --- Tipo definido internamente ---
export interface Course {
  id: string;
  title: string;
  desc: string;
  length?: string;
  price: number;
}

interface CourseCardProps {
  course: Course;
  onBuy: (c: Course) => void;
}

export default function CourseCard({ course, onBuy }: CourseCardProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-slate-600">
        {course.desc} • <span className="text-xs">{course.length}</span>
      </p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">${course.price.toFixed(2)}</div>
        <button
          onClick={() => onBuy(course)}
          className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
