---
title: "Day 4 — Garuda Army Bootcamp Recap (Video)"
description: "Full video recap: AMM vs CLMM evolution, Meteora V1 vs V2, DLMM bins and binsteps, liquidity strategies, live UI walkthrough, and risk management fundamentals"
date: "2025-02-19"
day: 4
lang: "en"
---

> **Source:** [Meteora LP Army Bootcamp - Indonesia - Day 1](http://www.youtube.com/watch?v=69IqNJ32m0w) — Led by mentors Yunus, Megumi (Zero Xumi), and Mas Beng.

## Introduction & Disclaimers

Mentors Yunus, Megumi, and Mas Beng introduce the first day of the Indonesian **"Garuda Army Bootcamp"** for Meteora. The session is purely for educational purposes and does **not** guarantee any airdrops, allocations, or NFTs.

> **Risk Warning:** Yunus emphasizes that the content is not financial advice. Participants must do their own research and only invest funds they are entirely prepared to lose.

## Key DeFi Terminology

Yunus breaks down essential DeFi terminology for beginners entering the DLMM ecosystem:

- **Contract Address (CA)** — The unique on-chain identifier for a token; always verify via official sources before interacting
- **Slippage** — Price difference between transaction initiation and execution
- **TVL (Total Value Locked)** — Total capital deposited in a protocol or pool
- **Volume** — Trading activity flowing through a pool; directly affects LP fee income
- **Volatility** — Magnitude of price swings; higher volatility means higher dynamic fees but also greater impermanent loss risk

## The Evolution: AMM to CLMM to DLMM

```mermaid
flowchart LR
    A["Traditional AMM"] --> B["CLMM"]
    B --> C["DLMM"]

    A1["Liquidity spread<br>across full curve"] -.-> A
    B1["Concentrated in<br>price ranges"] -.-> B
    C1["Shaped across bins<br>with zero slippage"] -.-> C

    style A fill:#888,color:#fff
    style B fill:#e68619,color:#fff
    style C fill:#2d7d46,color:#fff
```

- **AMM (Automated Market Maker)** — Liquidity is spread across the entire price curve; simple but capital-inefficient
- **CLMM (Concentrated Liquidity Market Maker)** — Allows users to concentrate funds in specific price ranges; more efficient capital usage and higher fee generation
- **DLMM (Dynamic Liquidity Market Maker)** — Meteora's innovation: liquidity shaped across discrete bins with zero slippage and dynamic fee adjustment

### Meteora V1 vs V2

Mas Beng explains the distinction between Meteora's two AMM versions:

```mermaid
flowchart LR
    V1["AMM V1<br>(Traditional)"] --> V1a["Standard pool<br>mechanics"]
    V1 --> V1b["No Meteora<br>points"]

    V2["AMM V2"] --> V2a["Optimized for<br>fast-paced trading"]
    V2 --> V2b["Token launches<br>& migrations"]
    V2 --> V2c["Earns Meteora<br>points"]

    style V1 fill:#888,color:#fff
    style V2 fill:#2d7d46,color:#fff
    style V2c fill:#1473e6,color:#fff
```

- **V1 (Traditional AMM)** — Standard pool mechanics, no additional incentives
- **V2 (Dynamic AMM)** — Highly effective for fast-paced trading scenarios such as token launches or migrations; also rewards users with **Meteora points**, unlike V1

## DLMM Mechanics Deep Dive

### Bins and Binsteps

Yunus explains that liquidity is stored in distinct **price bins**. The gap between consecutive bins is called a **binstep**, defining the granularity of price coverage.

```mermaid
flowchart TD
    A["DLMM Pool"] --> B["Bin 1<br>$95"]
    A --> C["Bin 2<br>$100<br>Active"]
    A --> D["Bin 3<br>$105"]
    A --> E["Bin 4<br>$110"]

    C --> F["Zero slippage<br>within active bin"]
    B --> G["Token side<br>below price"]
    D --> H["SOL side<br>above price"]

    style C fill:#2d7d46,color:#fff
    style B fill:#1473e6,color:#fff
    style D fill:#e68619,color:#fff
    style E fill:#e68619,color:#fff
```

**Key properties:**

- Each bin holds liquidity at a discrete price point
- Trades execute with **zero slippage** within a single bin
- Highly volatile markets trigger **dynamic fees**, increasing yield for LPs during rapid price fluctuations
- Single-sided liquidity is supported — deposit just one token type instead of a pair

### Impermanent (Divergent) Loss

Yunus details how providing liquidity inherently involves **divergent loss** as deposited tokens swap back and forth with market movements. The primary goal of LPing is to collect enough trading fees to **outpace** these inherent losses.

```mermaid
flowchart LR
    A["LP Position"] --> B["Price Moves"]
    B --> C["Token ratio<br>shifts"]
    C --> D["Divergent Loss"]

    A --> E["Trading Volume"]
    E --> F["Fee Income"]

    D --> G{"Fees > Loss?"}
    F --> G
    G -->|"Yes"| H["Profitable"]
    G -->|"No"| I["Unprofitable"]

    style H fill:#2d7d46,color:#fff
    style I fill:#c9252d,color:#fff
    style D fill:#e68619,color:#fff
    style F fill:#2d7d46,color:#fff
```

## Liquidity Strategies

### Three Primary Distribution Shapes

Yunus covers the three main DLMM distribution shapes:

```mermaid
flowchart TD
    S["Spot"] --> S1["Even distribution<br>across range"]
    S --> S2["General purpose<br>Best for beginners"]

    Cu["Curve"] --> Cu1["Concentrated<br>around current price"]
    Cu --> Cu2["Best for stable pairs<br>with low volatility"]

    BA["Bid-Ask"] --> BA1["Inverse curve<br>More at edges"]
    BA --> BA2["Ideal for DCA<br>in or out"]

    style S fill:#1473e6,color:#fff
    style Cu fill:#2d7d46,color:#fff
    style BA fill:#e68619,color:#fff
```

- **Spot** — Uniform spread across your selected price range; most versatile starting point
- **Curve** — Concentrated in the middle around current price; best for ranging or stable markets
- **Bid-Ask** — Inverse curve with more liquidity at the edges; highly favored on Meteora for Dollar Cost Averaging (DCA) strategies

> **Pro tip:** You can **stack multiple strategies** in a single position — for example, mixing Bid-Ask with Spot for a hybrid approach that combines DCA exits with broad fee capture.

## Live UI Walkthrough

### Connecting & Finding Pools

Mas Beng leads a live demonstration of the Meteora interface:

```mermaid
flowchart TD
    A["Connect Wallet<br>Phantom / Solflare"] --> B["Navigate to<br>DLMM Pools"]
    B --> C{"Search for pool"}
    C -->|"By name"| D["Risk: Scam tokens<br>with same name"]
    C -->|"By CA"| E["Safe: Verified<br>contract address"]

    E --> F["Select Pool"]
    F --> G["Review pool stats<br>TVL, Volume, Fees"]

    style D fill:#c9252d,color:#fff
    style E fill:#2d7d46,color:#fff
    style A fill:#888,color:#fff
```

> **Always search by Contract Address (CA)** to avoid malicious copycat tokens that impersonate legitimate projects with identical names.

### Deploying a Position

Mas Beng demonstrates how to set custom price parameters and deploy liquidity:

1. **Select trading pair** — Choose the pool with the right bin step for your strategy
2. **Set price parameters** — Define custom minimum and maximum price for your liquidity range
3. **Choose distribution** — Select Spot, Curve, Bid-Ask, or stack multiple strategies
4. **Set deposit amount** — Single-sided (one token) or dual-sided (both tokens)
5. **Review and confirm** — Check all parameters before signing the transaction

## Risk Management & Q&A Insights

### Non-Refundable Bin Rent

The mentors warn users to be careful of non-refundable rent fees when creating new bins:

```mermaid
flowchart LR
    A["New Token Pool"] --> B{"Bins already<br>created?"}
    B -->|"No"| C["You pay rent<br>to create bins"]
    B -->|"Yes"| D["No extra cost"]

    C --> E["Non-refundable<br>SOL fee"]

    style C fill:#c9252d,color:#fff
    style D fill:#2d7d46,color:#fff
    style E fill:#c9252d,color:#fff
```

When interacting with **brand-new token pools**, creating new bins requires a non-refundable rent fee in SOL. They suggest waiting for other LPs to create the bins first to protect your capital.

### Capital Allocation Rules

- **Never** put your entire portfolio into a single liquidity position
- Diversify across multiple positions and token pairs
- Keep a reserve for opportunities and emergencies

### The Power of Compounding

During the Q&A, Megumi emphasizes that LPing on Meteora is about **steady compounding** rather than getting rich quickly:

```mermaid
flowchart LR
    A["5-10% daily<br>target"] --> B["Consistent<br>compounding"]
    B --> C["Sustainable<br>portfolio growth"]

    D["Chase 100%+<br>pumps"] --> E["Occasional<br>big win"]
    E --> F["Frequent<br>wipeouts"]

    style A fill:#2d7d46,color:#fff
    style C fill:#2d7d46,color:#fff
    style D fill:#c9252d,color:#fff
    style F fill:#c9252d,color:#fff
```

Consistently targeting a **5% to 10% daily return** builds wealth much more safely than gambling on high-risk meme coins. Small, consistent gains compound significantly over time.

## Homework & Certification

The mentors conclude day one with a **mandatory quiz**. Participants must pass this quiz to advance in the bootcamp and earn the **"Garuda Army Private"** role in the Discord community.

> **Key takeaway:** This bootcamp emphasizes *learning by doing* — theoretical knowledge must be validated through practical application and assessment before advancing.
