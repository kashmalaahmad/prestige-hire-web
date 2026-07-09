// src/lib/services/index.ts
import type { ServiceData } from "@/lib/types/service";
import { privateJet } from "./private-jet";
import { yacht } from "./yacht";
import { formalCarHire } from "./formal-car-hire";
import { Chauffeur } from "./chauffeur";
import { luxuryCarHire } from "./luxury-car-hire";


export const servicesPageData: Record<string, ServiceData> = {
  "private-jet": privateJet,
  "yacht": yacht,
  "formal-car-hire": formalCarHire,
  "chauffeur": Chauffeur,
  "luxury-car-hire": luxuryCarHire,
};