# Piton & GNS Web Test Projesi

## Proje Hakkında
Bu proje, PITON Technology staj başvurusu kapsamında hazırlanmış bir test otomasyon projesidir. DemoQA platformu üzerinde UI test süreçleri ve otomasyon, GNS Metal ve Piton web siteleri üzerinde ise keşif testleri gerçekleştirilmiştir.

## Kullanılan Teknolojiler
- **JavaScript** — Test dili
- **Playwright** — Test otomasyon kütüphanesi
- **Node.js** — Çalışma ortamı

## Kurulum Adımları

1. Repoyu klonlayın:
   git clone https://github.com/ZeynepCkmkk/piton-staj-proje.git

2. Bağımlılıkları yükleyin:
   npm install

3. Playwright tarayıcılarını yükleyin:
npx playwright install


4. Testleri çalıştırın:
 npx playwright test

## Proje Yapısı

```
tests/
  elements/
  forms/
  widgets/
reports/
```


## Test Modülleri

### Bölüm A — DemoQA Otomasyon Testleri
- **Elements:** Text Box, Check Box, Radio Button, Web Tables, Buttons
- **Forms:** Practice Form
- **Widgets:** Progress Bar, Select Menu

### Bölüm B — Manuel Keşif Testleri
- https://www.gnsmetal.com/home
- https://piton.com.tr/

## Notlar
- Check Box ve Web Tables testleri demoqa.com sitesindeki reklam engelinden dolayı skip edilmiştir.
- Testler yalnızca Chromium tarayıcısında çalıştırılmıştır.

  ## Video Kaydı
[Ekran kayıtları için tıklayın](https://drive.google.com/drive/folders/1F0pb4lmyDCuHAEdKn-FlQt82XKl_RwhD?usp=drive_link)
