const goldenAngle = Math.PI * (3 - Math.sqrt(5));

export function makeParticles(count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const phi = goldenAngle * i;
    const x = Math.cos(phi) * ring;
    const z = Math.sin(phi) * ring;
    const warp = 1.13 + .11 * Math.sin(5 * x + 3 * y) * Math.cos(5 * z - 2 * y);
    const light = .57 + .43 * Math.sin(8 * x - 5 * y + 4 * z) ** 2;
    positions.set([x * warp, y * warp, z * warp], i * 3);
    colors.set([.19 + .43 * light, .51 + .47 * light, .27 + .33 * (1 - light)], i * 3);
  }

  return { positions, colors };
}
