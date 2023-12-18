var e = (await import("typescript-esbuild/Target/Function/Merge.js")).default(
	(await import("files-pipe/Target/Variable/Option.js")).default,
	{
		Biome: (await import("./Biome.js")).default,
		Action: {
			Failed: async (t) => `Error: Cannot format file ${t.Input}!`,
			Accomplished: async (t) => `Formatted ${t.Input} in ${t.Output}.`,
			Fulfilled: async (t) =>
				t.Files > 0
					? `Successfully formatted a total of ${
							t.Files
						} JavaScript and TypeScript ${
							t.Files === 1 ? "file" : "files"
						}.`
					: !1,
		},
	}
);
export { e as default };
