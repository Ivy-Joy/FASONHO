// src/components/hero/hero-buttons.tsx

import { Play } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <Button href="/register" className="w-full sm:w-auto px-8">
        Get Started Free →
      </Button>

      <Button href="/demo" variant="secondary" className="w-full sm:w-auto px-8">
        <Play size={18} fill="currentColor" />
        Watch Demo
      </Button>
    </div>
  );
}