# ===============================================================
# generate-webhotel-pages.ps1
# ===============================================================

# ✏️  Daftar kota yang ingin kamu buatkan halaman
$regions = @(
    "Kendal", "Batang", "Demak", "Kudus", "Jepara",
    "Pati", "Rembang", "Blora", "Grobogan", "Klaten"
)

# 📂 Basis folder (ubah kalau struktur berbeda)
$basePath = "src/app"

foreach ($region in $regions) {
    # slug folder pakai lower case
    $slug        = $region.ToLower()
    $folderPath  = "$basePath/web-hotel-$slug"
    $filePath    = "$folderPath/page.tsx"
    $component   = "WebHotel$region"          # contoh: WebHotelKlaten
    $importPath  = "@/components/$component"  # "@/components/WebHotelKlaten"

    # Buat folder (dan parent‑nya) kalau belum ada
    New-Item -ItemType Directory -Path $folderPath -Force | Out-Null

    # Buat / timpa file page.tsx dengan template di‑custom
    @"
// page.tsx for $region
'use client';

// Halaman untuk Web Hotel $region
import React from 'react';
import $component from '$importPath';

const WebHotel${region}Page = () => {
    return <$component />;
};

export default WebHotel${region}Page;
" | Set-Content -Encoding UTF8 $filePath
}

Write-Host "✅ Semua halaman Web Hotel berhasil dibuat di $basePath"
