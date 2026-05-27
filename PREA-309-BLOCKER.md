# PREA-309: Blocker Documentation

**Issue:** Create experimental layout proposal using `/video-to-website` skill  
**Status:** 🔴 BLOCKED  
**Blocker Owner:** CTO / Project Lead  
**Date:** 2026-05-27

## Problem

Issue PREA-309 explicitly requests:
> "Usar a skill `/video-to-website` para produzir o layout/protótipo ou especificação resultante"  
> (Use the /video-to-website skill to produce the resulting layout/prototype or specification)

**The `/video-to-website` skill does not exist in the available skill registry.**

- Attempted invocation: `Skill("video-to-website", "./public/assets/movel-plan/CuKvDcMtPUc.mp4")`
- Result: `Unknown skill: video-to-website`
- No references to this skill found in project files or documentation
- Task cannot proceed without this capability

## Available Input Assets

Five MP4 video files are present and ready in `./public/assets/movel-plan/`:

| File | Size | Ready |
|------|------|-------|
| CuKvDcMtPUc.mp4 | 770K | ✓ |
| DN6JZ30j4nC.mp4 | 4.7M | ✓ |
| DOHXUTIknN5.mp4 | 2.5M | ✓ |
| DOOaavrDSEE.mp4 | 5.0M | ✓ |
| DYPtgxORg-Q.mp4 | 3.0M | ✓ |

## Required Clarification

**CTO must clarify one of the following paths:**

1. **Skill is planned/in progress:** When will `/video-to-website` be available for use? UX Designer will wait for implementation and proceed once ready.

2. **Skill will be built separately:** Should UX Designer proceed with **manual experimental layout design** by analyzing video content directly (without the automated skill)? If yes, design will proceed immediately with:
   - Video content analysis (watch/understand the demonstrated feature)
   - Experimental layout proposal in design system tokens
   - Engineering handoff with component specs, responsive constraints, and acceptance criteria

3. **Feature scope change:** If the skill approach is not feasible, what is the preferred alternative for delivering the experimental layout proposal?

## Path Forward

## ✅ CTO DECISION (2026-05-27)

**Selected Path: #2 (Manual Experimental Layout Design)**

The `/video-to-website` skill is not available with a confirmed timeline. To unblock design work and maintain project momentum, the CTO has decided to proceed with manual experimental layout design:

**Next Steps for UX Designer:**
1. Analyze the five ready MP4 video files in `/public/assets/movel-plan/` to understand the feature being demonstrated
2. Create experimental layout proposal using design system tokens (per DESIGN-SYSTEM.md v1)
3. Deliver component specifications, responsive constraints, and acceptance criteria
4. **Expected turnaround:** 3–4 hours

**Video assets ready for analysis:**
- CuKvDcMtPUc.mp4 (770K)
- DN6JZ30j4nC.mp4 (4.7M)
- DOHXUTIknN5.mp4 (2.5M)
- DOOaavrDSEE.mp4 (5.0M)
- DYPtgxORg-Q.mp4 (3.0M)

**Disposition:** `blocked` (awaiting UX Designer analysis and design proposal)

---

**UX Designer note:** CTO guidance has been provided. Begin analysis and design work immediately. Estimated completion: 3–4 hours from start. No external blockers remain.
