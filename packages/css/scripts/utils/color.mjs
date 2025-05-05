export function hexToHSL(hex) {
	// Remove the hash if present
	hex = hex.replace("#", "").replace("0x", "");

	// Convert hex to RGB
	const r = Number.parseInt(hex.substring(0, 2), 16) / 255;
	const g = Number.parseInt(hex.substring(2, 4), 16) / 255;
	const b = Number.parseInt(hex.substring(4, 6), 16) / 255;

	// Find the minimum and maximum values to calculate the lightness
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;

	let h, s;

	if (max === min) {
		h = s = 0; // achromatic
	}
	else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		if (max === r) {
			h = (g - b) / d + (g < b ? 6 : 0);
		}

		if (max === g) {
			h = (b - r) / d + 2;
		}

		if (max === b) {
			h = (r - g) / d + 4;
		}

		h /= 6;

		if (h < 0) {
			h += 1;
		}
	}

	// Convert to degrees and percentages
	h = Math.round(h * 360);
	s = Math.round(s * 100);
	const lightness = Math.round(l * 100);

	return `hsl(${h}, ${s}%, ${lightness}%)`;
}
