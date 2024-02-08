/**
 * @module Option
 *
 */
export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	Biome: (await import("./Biome.js")).default,
	Action: {
		Failed: async (On) => `Error: Cannot format file ${On.Input}!`,
		Accomplished: async (On) => `Formatted ${On.Input} in ${On.Output}.`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully formatted a total of ${
						Plan.Files
				  } JavaScript and TypeScript ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
	},
} satisfies Type);

import type Type from "../Interface/Option.js";
