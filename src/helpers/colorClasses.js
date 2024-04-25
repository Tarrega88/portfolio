const colorData = {
  night: {
    bg: { text: "bg", num: 800 },
    text: { text: "text", num: 100 },
    textHover: { text: "hover:text", num: 400 },
    textActive: { text: "active:text", num: 500 },
    icon: { text: "text", num: 200 },
    iconActive: { text: "text", num: 500 },
    svg: { text: "fill", num: 100 },
  },
  day: {
    bg: { text: "bg", num: 50 },
    text: { text: "text", num: 800 },
    textHover: { text: "hover:text", num: 500 },
    textActive: { text: "active:text", num: 400 },
    icon: { text: "text", num: 800 },
    iconActive: { text: "text", num: 400 },
    svg: { text: "fill", num: 800 },
  },
};

const colorTypes = ["zinc", "slate", "stone"];

// const colors = colorTypes.reduce((a, color) => {
//   if (!a[color]) a[color] = {};
//   // if (!a[color][key]) a[color][key] = {};
//   Object.entries(colorData).forEach(
//     ([lightMode, value]) => {
//       if (!a[color][lightMode]) a[color][lightMode] = {};
//       Object.entries(value).forEach(
//         ([key, { text, num }]) =>
//           (a[color][lightMode][key] = `${text}-${color}-${num}`),
//       );
//     },

//   );
//   return a;
// }, {});

const colors = {
  zinc: {
    night: {
      bg: "bg-zinc-800",
      codeBg: "bg-zinc-600",
      text: "text-zinc-100",
      textHover: "hover:text-zinc-400",
      textActive: "active:text-zinc-500",
      iconActive: "text-zinc-200",
      icon: "text-zinc-500",
      svg: "fill-zinc-100",
    },
    day: {
      bg: "bg-zinc-50",
      codeBg: "bg-zinc-300",
      text: "text-zinc-800",
      textHover: "hover:text-zinc-500",
      textActive: "active:text-zinc-400",
      iconActive: "text-zinc-800",
      icon: "text-zinc-400",
      svg: "fill-zinc-800",
    },
  },
  // slate: {
  //   night: {
  //     bg: "bg-slate-800",
  //     text: "text-slate-100",
  //     textHover: "hover:text-slate-400",
  //     textActive: "active:text-slate-500",
  //     iconActive: "text-slate-200",
  //     icon: "text-slate-500",
  //     svg: "fill-slate-100",
  //   },
  //   day: {
  //     bg: "bg-slate-50",
  //     text: "text-slate-800",
  //     textHover: "hover:text-slate-500",
  //     textActive: "active:text-slate-400",
  //     iconActive: "text-slate-800",
  //     icon: "text-slate-400",
  //     svg: "fill-slate-800",
  //   },
  // },
  // gray: {
  //   night: {
  //     bg: "bg-gray-800",
  //     text: "text-gray-100",
  //     textHover: "hover:text-gray-400",
  //     textActive: "active:text-gray-500",
  //     iconActive: "text-gray-200",
  //     icon: "text-gray-500",
  //     svg: "fill-gray-100",
  //   },
  //   day: {
  //     bg: "bg-gray-50",
  //     text: "text-gray-800",
  //     textHover: "hover:text-gray-500",
  //     textActive: "active:text-gray-400",
  //     icon: "text-gray-400",
  //     iconActive: "text-gray-800",
  //     svg: "fill-gray-800",
  //   },
  // },
  // indigo: {
  //   night: {
  //     bg: "bg-indigo-950",
  //     text: "text-indigo-50",
  //     textHover: "hover:text-indigo-400",
  //     textActive: "active:text-indigo-500",
  //     icon: "text-indigo-400",
  //     iconActive: "text-indigo-100",
  //     svg: "fill-indigo-100",
  //   },
  //   day: {
  //     bg: "bg-indigo-50",
  //     text: "text-indigo-800",
  //     textHover: "hover:text-indigo-500",
  //     textActive: "active:text-indigo-400",
  //     iconActive: "text-indigo-800",
  //     icon: "text-indigo-400",
  //     svg: "fill-indigo-800",
  //   },
  // },
  // neutral: {
  //   night: {
  //     bg: "bg-neutral-800",
  //     text: "text-neutral-100",
  //     textHover: "hover:text-neutral-400",
  //     textActive: "active:text-neutral-500",
  //     icon: "text-neutral-500",
  //     iconActive: "text-neutral-200",
  //     svg: "fill-neutral-100",
  //   },
  //   day: {
  //     bg: "bg-neutral-50",
  //     text: "text-neutral-800",
  //     textHover: "hover:text-neutral-500",
  //     textActive: "active:text-neutral-400",
  //     iconActive: "text-neutral-800",
  //     icon: "text-neutral-400",
  //     svg: "fill-neutral-800",
  //   },
  // },
  // stone: {
  //   night: {
  //     bg: "bg-stone-800",
  //     text: "text-stone-100",
  //     textHover: "hover:text-stone-400",
  //     textActive: "active:text-stone-500",
  //     iconActive: "text-stone-200",
  //     icon: "text-stone-500",
  //     svg: "fill-stone-100",
  //   },
  //   day: {
  //     bg: "bg-stone-50",
  //     text: "text-stone-800",
  //     textHover: "hover:text-stone-500",
  //     textActive: "active:text-stone-400",
  //     iconActive: "text-stone-800",
  //     icon: "text-stone-400",
  //     svg: "fill-stone-800",
  //   },
  // },
  // cyan: {
  //   night: {
  //     bg: "bg-cyan-800",
  //     text: "text-cyan-100",
  //     textHover: "hover:text-cyan-400",
  //     textActive: "active:text-cyan-500",
  //     iconActive: "text-cyan-200",
  //     icon: "text-cyan-500",
  //     svg: "fill-cyan-100",
  //   },
  //   day: {
  //     bg: "bg-cyan-50",
  //     text: "text-cyan-800",
  //     textHover: "hover:text-cyan-500",
  //     textActive: "active:text-cyan-400",
  //     iconActive: "text-cyan-800",
  //     icon: "text-cyan-400",
  //     svg: "fill-cyan-800",
  //   },
  // },
};

export { colors };
