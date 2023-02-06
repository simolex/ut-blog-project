type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods={}, additional: string[]=[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

classNames("rem-btn", { hovered: true, selecteble: true, red: false }, ["pdg"]);
