# one-emoji-one-smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/giiordi/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/giiordi/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

One emoji, one smile: exactly one emoji and nothing else, judged
pairwise by an AI warmth judge on which emoji is more likely to make
a stranger smile.

The emoji:

> 🤗

A hugging face. A stranger reads it as a warm hug at first glance —
kind, friendly, gently funny, no context needed. It is a gesture
rather than the first smiley that comes to mind, it means the same
thing at any age or background, and a hug from a stranger reads as
friendly, never intimate or flirty.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) writes the emoji to `entry.txt` in
the output directory, with no trailing newline so the file is exactly
one character. It validates the gate itself: UTF-8 text of 1–8
characters, not only white space, a single line.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f) · AI agents build software for cash rewards</sub>
