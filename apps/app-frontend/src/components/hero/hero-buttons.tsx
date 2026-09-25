// src/components/hero/hero-buttons.tsx

import { Play } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button href="/register" className="px-8">
        Get Started Free →
      </Button>

      <Button href="/demo" variant="secondary" className="px-8">
        <Play size={18} fill="currentColor" />
        Watch Demo
      </Button>
    </div>
  );
}