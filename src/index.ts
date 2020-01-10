import { writeReadableCode } from "./1-plain/index";
import { writeSmallFunctions } from "./2-blocks";

export function isMyCodeClean(): boolean {
  return false;
}

export function shouldICleanMyCode(): boolean {
  return true;
}

export function getCleanPrinciples(): string[] {
  const principles: string[] = [
    "Show intention and hide details.",
    "Avoid globalization and coupling.",
    "Separate responsibilities.",
    "Don't Repeat Yourself (DRY)",
    "Keep It Simple, (not) Stupid (KISS)"
  ];
  return principles;
}

export function applyPrinciples(principles: string[]) {
  writeReadableCode([...principles[0]]);
  writeSmallFunctions([...principles[2]]);
}
