---
title: "Hari 4 — Rekap Video Garuda Army Bootcamp Hari 1"
description: "Rekap video lengkap: evolusi AMM ke CLMM, Meteora V1 vs V2, mekanik bin dan binstep DLMM, strategi likuiditas, panduan UI langsung, dan dasar manajemen risiko"
date: "2025-02-19"
day: 4
lang: "id"
---

> **Sumber:** [Meteora LP Army Bootcamp - Indonesia - Hari 1](http://www.youtube.com/watch?v=69IqNJ32m0w) — Dipandu oleh mentor Yunus, Megumi (Zero Xumi), dan Mas Beng.

## Pengantar & Disclaimer

Mentor Yunus, Megumi, dan Mas Beng memperkenalkan hari pertama **"Garuda Army Bootcamp"** Indonesia untuk Meteora. Sesi ini murni untuk tujuan edukasi dan **tidak** menjamin airdrop, alokasi, atau NFT apapun.

> **Peringatan Risiko:** Yunus menegaskan bahwa konten ini bukan merupakan saran finansial. Peserta harus melakukan riset sendiri dan hanya menginvestasikan dana yang benar-benar siap mereka relakan jika hilang.

## Terminologi DeFi Utama

Yunus menjelaskan terminologi DeFi esensial bagi pemula yang memasuki ekosistem DLMM:

- **Contract Address (CA)** — Identitas unik sebuah token di blockchain; selalu verifikasi melalui sumber resmi sebelum berinteraksi
- **Slippage** — Selisih harga antara saat transaksi dimulai dan saat dieksekusi
- **TVL (Total Value Locked)** — Total modal yang disimpan dalam sebuah protokol atau pool
- **Volume** — Aktivitas perdagangan yang mengalir melalui pool; berpengaruh langsung pada pendapatan fee LP
- **Volatilitas** — Besarnya pergerakan harga; volatilitas tinggi berarti fee dinamis lebih besar tetapi risiko impermanent loss juga meningkat

## Evolusi: AMM ke CLMM ke DLMM

```mermaid
flowchart LR
    A["AMM Tradisional"] --> B["CLMM"]
    B --> C["DLMM"]

    A1["Likuiditas tersebar<br>di seluruh kurva"] -.-> A
    B1["Terkonsentrasi di<br>rentang harga"] -.-> B
    C1["Dibentuk di bin<br>tanpa slippage"] -.-> C

    style A fill:#888,color:#fff
    style B fill:#e68619,color:#fff
    style C fill:#2d7d46,color:#fff
```

- **AMM (Automated Market Maker)** — Likuiditas tersebar di seluruh kurva harga; sederhana tetapi tidak efisien secara modal
- **CLMM (Concentrated Liquidity Market Maker)** — Memungkinkan pengguna mengonsentrasikan dana pada rentang harga tertentu; penggunaan modal lebih efisien dan fee lebih tinggi
- **DLMM (Dynamic Liquidity Market Maker)** — Inovasi Meteora: likuiditas dibentuk di bin-bin diskret dengan nol slippage dan penyesuaian fee dinamis

### Meteora V1 vs V2

Mas Beng menjelaskan perbedaan antara dua versi AMM Meteora:

```mermaid
flowchart LR
    V1["AMM V1<br>(Tradisional)"] --> V1a["Mekanik pool<br>standar"]
    V1 --> V1b["Tidak ada<br>poin Meteora"]

    V2["AMM V2"] --> V2a["Dioptimalkan untuk<br>trading cepat"]
    V2 --> V2b["Peluncuran token<br>& migrasi"]
    V2 --> V2c["Mendapatkan<br>poin Meteora"]

    style V1 fill:#888,color:#fff
    style V2 fill:#2d7d46,color:#fff
    style V2c fill:#1473e6,color:#fff
```

- **V1 (AMM Tradisional)** — Mekanik pool standar, tanpa insentif tambahan
- **V2 (AMM Dinamis)** — Sangat efektif untuk skenario trading cepat seperti peluncuran token atau migrasi; juga memberikan **poin Meteora** kepada pengguna, tidak seperti V1

## Mekanik DLMM Secara Mendalam

### Bin dan Binstep

Yunus menjelaskan bahwa likuiditas disimpan dalam **bin harga** yang diskret. Jarak antar bin disebut **binstep**, yang menentukan granularitas cakupan harga.

```mermaid
flowchart TD
    A["Pool DLMM"] --> B["Bin 1<br>$95"]
    A --> C["Bin 2<br>$100<br>Aktif"]
    A --> D["Bin 3<br>$105"]
    A --> E["Bin 4<br>$110"]

    C --> F["Nol slippage<br>dalam bin aktif"]
    B --> G["Sisi token<br>di bawah harga"]
    D --> H["Sisi SOL<br>di atas harga"]

    style C fill:#2d7d46,color:#fff
    style B fill:#1473e6,color:#fff
    style D fill:#e68619,color:#fff
    style E fill:#e68619,color:#fff
```

**Properti utama:**

- Setiap bin menyimpan likuiditas pada titik harga diskret
- Perdagangan dieksekusi dengan **nol slippage** dalam satu bin
- Pasar yang sangat volatil memicu **fee dinamis**, meningkatkan imbal hasil LP saat harga berfluktuasi cepat
- Likuiditas satu sisi (single-sided) didukung — deposit hanya satu jenis token, bukan sepasang

### Impermanent (Divergent) Loss

Yunus menjelaskan secara detail bahwa menyediakan likuiditas secara inheren melibatkan **divergent loss** karena token yang disetorkan bertukar bolak-balik seiring pergerakan pasar. Tujuan utama LP adalah mengumpulkan fee perdagangan yang cukup untuk **melebihi** kerugian bawaan ini.

```mermaid
flowchart LR
    A["Posisi LP"] --> B["Harga Bergerak"]
    B --> C["Rasio token<br>bergeser"]
    C --> D["Divergent Loss"]

    A --> E["Volume Perdagangan"]
    E --> F["Pendapatan Fee"]

    D --> G{"Fee > Loss?"}
    F --> G
    G -->|"Ya"| H["Menguntungkan"]
    G -->|"Tidak"| I["Tidak Menguntungkan"]

    style H fill:#2d7d46,color:#fff
    style I fill:#c9252d,color:#fff
    style D fill:#e68619,color:#fff
    style F fill:#2d7d46,color:#fff
```

## Strategi Likuiditas

### Tiga Bentuk Distribusi Utama

Yunus membahas tiga bentuk distribusi utama DLMM:

```mermaid
flowchart TD
    S["Spot"] --> S1["Distribusi merata<br>di seluruh rentang"]
    S --> S2["Serbaguna<br>Terbaik untuk pemula"]

    Cu["Curve"] --> Cu1["Terkonsentrasi<br>di sekitar harga saat ini"]
    Cu --> Cu2["Terbaik untuk pair stabil<br>volatilitas rendah"]

    BA["Bid-Ask"] --> BA1["Kurva terbalik<br>Lebih banyak di tepi"]
    BA --> BA2["Ideal untuk DCA<br>masuk atau keluar"]

    style S fill:#1473e6,color:#fff
    style Cu fill:#2d7d46,color:#fff
    style BA fill:#e68619,color:#fff
```

- **Spot** — Penyebaran seragam di seluruh rentang harga yang dipilih; titik awal paling fleksibel
- **Curve** — Terkonsentrasi di tengah sekitar harga saat ini; terbaik untuk pasar yang ranging atau stabil
- **Bid-Ask** — Kurva terbalik dengan lebih banyak likuiditas di tepi; sangat disukai di Meteora untuk strategi Dollar Cost Averaging (DCA)

> **Tips pro:** Anda bisa **menumpuk beberapa strategi** dalam satu posisi — misalnya, mencampur Bid-Ask dengan Spot untuk pendekatan hybrid yang menggabungkan exit DCA dengan fee capture yang luas.

## Panduan UI Langsung

### Menghubungkan Wallet & Mencari Pool

Mas Beng memimpin demonstrasi langsung antarmuka Meteora:

```mermaid
flowchart TD
    A["Hubungkan Wallet<br>Phantom / Solflare"] --> B["Navigasi ke<br>Pool DLMM"]
    B --> C{"Cari pool"}
    C -->|"Berdasarkan nama"| D["Risiko: Token scam<br>dengan nama sama"]
    C -->|"Berdasarkan CA"| E["Aman: Contract address<br>terverifikasi"]

    E --> F["Pilih Pool"]
    F --> G["Review statistik pool<br>TVL, Volume, Fee"]

    style D fill:#c9252d,color:#fff
    style E fill:#2d7d46,color:#fff
    style A fill:#888,color:#fff
```

> **Selalu cari berdasarkan Contract Address (CA)** untuk menghindari token scam berbahaya yang meniru proyek sah dengan nama yang identik.

### Men-deploy Posisi

Mas Beng mendemonstrasikan cara mengatur parameter harga kustom dan men-deploy likuiditas:

1. **Pilih pasangan trading** — Pilih pool dengan bin step yang sesuai untuk strategi Anda
2. **Atur parameter harga** — Tentukan harga minimum dan maksimum kustom untuk rentang likuiditas
3. **Pilih distribusi** — Pilih Spot, Curve, Bid-Ask, atau tumpuk beberapa strategi
4. **Atur jumlah deposit** — Satu sisi (satu token) atau dua sisi (kedua token)
5. **Review dan konfirmasi** — Periksa semua parameter sebelum menandatangani transaksi

## Manajemen Risiko & Insight dari Q&A

### Biaya Sewa Bin yang Tidak Dapat Dikembalikan

Para mentor memperingatkan pengguna agar berhati-hati dengan biaya sewa yang tidak dapat dikembalikan saat membuat bin baru:

```mermaid
flowchart LR
    A["Pool Token Baru"] --> B{"Bin sudah<br>dibuat?"}
    B -->|"Belum"| C["Anda bayar sewa<br>untuk membuat bin"]
    B -->|"Sudah"| D["Tidak ada biaya<br>tambahan"]

    C --> E["Biaya SOL<br>tidak dapat dikembalikan"]

    style C fill:#c9252d,color:#fff
    style D fill:#2d7d46,color:#fff
    style E fill:#c9252d,color:#fff
```

Saat berinteraksi dengan **pool token baru**, membuat bin baru memerlukan biaya sewa yang tidak dapat dikembalikan dalam SOL. Mereka menyarankan untuk menunggu LP lain membuat bin terlebih dahulu untuk melindungi modal Anda.

### Aturan Alokasi Modal

- **Jangan pernah** menaruh seluruh portofolio dalam satu posisi likuiditas
- Diversifikasi di beberapa posisi dan pasangan token
- Simpan cadangan untuk peluang dan keadaan darurat

### Kekuatan Compounding

Dalam sesi Q&A, Megumi menekankan bahwa LP di Meteora adalah tentang **compounding yang konsisten** bukan cepat kaya:

```mermaid
flowchart LR
    A["Target 5-10%<br>per hari"] --> B["Compounding<br>konsisten"]
    B --> C["Pertumbuhan<br>portofolio berkelanjutan"]

    D["Mengejar pump<br>100%+"] --> E["Kadang<br>untung besar"]
    E --> F["Sering<br>rugi total"]

    style A fill:#2d7d46,color:#fff
    style C fill:#2d7d46,color:#fff
    style D fill:#c9252d,color:#fff
    style F fill:#c9252d,color:#fff
```

Secara konsisten menargetkan **return harian 5% hingga 10%** membangun kekayaan jauh lebih aman dibandingkan berjudi pada meme coin berisiko tinggi. Keuntungan kecil yang konsisten akan ter-compound secara signifikan dari waktu ke waktu.

## Tugas & Sertifikasi

Para mentor menutup hari pertama dengan **kuis wajib**. Peserta harus lulus kuis ini untuk naik level di bootcamp dan mendapatkan peran **"Garuda Army Private"** di komunitas Discord.

> **Poin utama:** Bootcamp ini menekankan *belajar sambil praktik* — pengetahuan teoritis harus divalidasi melalui penerapan praktis dan penilaian sebelum naik level.
