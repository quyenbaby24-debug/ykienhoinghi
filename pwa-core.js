const PWA_CONFIG = {
  APP_NAME: 'GÓP Ý - PHẢN ẢNH',
  APP_DESC: 'Ứng dụng góp ý phản ảnh của khu dân cư',
  APP_ICON: 'icon-1000.png',
  APP_VERSION: 'v1.0.0',
  THEME_COLOR: '#5b8dee',
  ACCENT_COLOR: '#7ec8e3',
  BADGE_LABEL: 'Lưu Hành Nội Bộ',
  SW_PATH: 'sw.js',
  SPLASH_DELAY: 3000,
  SPLASH_MAX: 6000,
  OVERLAY_DELAY: 1000,
  IOS_DELAY: 1500,
  ORIENTATION: 'portrait',
  WAKE_LOCK: true
};

(function() {
  const T = PWA_CONFIG.THEME_COLOR;
  const A = PWA_CONFIG.ACCENT_COLOR;
  const css = "#pwa-overlay{position:fixed;inset:0;z-index:1000000;background:rgba(0,0,0,.45);backdrop-filter:blur(24px);display:none;align-items:center;justify-content:center;}#pwa-overlay.active{display:flex;}#pwa-card{width:94%;max-width:355px;background:rgba(255,255,255,.95);border-radius:26px;padding:18px 16px;}.pwa-icon-box{width:58px;height:58px;border-radius:18px;background:linear-gradient(135deg,"+A+","+T+");display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:30px;}.pwa-app-name{font-size:20px;font-weight:800;text-align:center;color:"+T+";}.pwa-app-desc{text-align:center;font-size:12px;color:rgba(0,0,0,.55);}.pwa-badge{display:inline-block;margin-top:8px;padding:4px 10px;border-radius:999px;background:rgba(91,141,238,.1);color:"+T+";font-size:11px;}.pwa-divider{height:1px;background:rgba(0,0,0,.08);margin:14px 0;}#pwa-btn-install{width:100%;border:none;border-radius:18px;padding:14px;background:linear-gradient(135deg,"+A+","+T+");color:#fff;font-weight:800;cursor:pointer;}.pwa-step{display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:10px 12px;background:rgba(255,255,255,.8);border-radius:16px;}.pwa-step-num{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,"+A+","+T+");color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;}.pwa-step-text{font-size:14px;color:rgba(0,0,0,.78);flex:1;}.pwa-step-text b{color:"+T+";}.pwa-after-note{margin-top:16px;padding:12px;background:rgba(255,248,225,0.6);border-radius:14px;font-size:13px;}.pwa-dismiss,.pwa-ok{display:table;margin:14px auto 0;padding:10px 28px;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;}.pwa-dismiss{border:1px solid rgba(0,0,0,.15);background:rgba(0,0,0,.05);color:#e74c3c;}.pwa-ok{border:none;background:linear-gradient(135deg,"+A+","+T+");color:white;}.pwa-illus-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin:16px 0 8px;padding:12px 14px;border-radius:40px;border:1.5px solid rgba(91,141,238,.4);background:rgba(91,141,238,.08);color:#4a6fa5;font-size:14px;font-weight:700;cursor:pointer;}.pwa-illus-btn .arrow{transition:.2s;display:inline-block;}.pwa-illus-btn.open .arrow{transform:rotate(180deg);}.pwa-illus-img-wrap{overflow:hidden;max-height:0;transition:max-height .4s ease;border-radius:20px;margin-top:8px;}.pwa-illus-img-wrap.open{max-height:800px;}.pwa-illus-img-wrap img{width:100%;border-radius:20px;display:block;}";
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', () => {
  const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const overlay = document.createElement('div');
  overlay.id = 'pwa-overlay';
  overlay.innerHTML = '<div id="pwa-card"><div style="text-align:center"><div class="pwa-icon-box">📲</div><div class="pwa-app-name">' + esc(PWA_CONFIG.APP_NAME) + '</div><div class="pwa-app-desc">' + esc(PWA_CONFIG.APP_DESC) + '</div><div><span class="pwa-badge">' + esc(PWA_CONFIG.BADGE_LABEL) + '</span></div></div><div class="pwa-divider"></div><div id="pwa-block-android" hidden><div id="pwa-already-installed" hidden style="text-align:center;padding:18px 10px;"><div style="font-size:48px;">✅</div><div style="font-size:18px;font-weight:800;color:#2d7a4f;">✅ Ứng dụng đã được cài đặt</div><div style="font-size:13px;">Mở app từ màn hình chính để sử dụng</div></div><div id="pwa-install-content"><div class="pwa-cta-text" style="text-align:center;margin-bottom:14px;"><b>App Web</b> dạng <b>PWA</b><br>Cài lên <b>Màn hình chính</b></div><button id="pwa-btn-install">📥 Cài đặt ứng dụng</button><div class="pwa-after-note">Sau khi cài, mở từ màn hình chính</div></div></div><div id="pwa-block-ios" hidden><div class="pwa-step"><div class="pwa-step-num">1</div><div class="pwa-step-text">Mở trang này bằng <b>Safari</b> 🧭 trên iPhone của bạn.</div></div><div class="pwa-step"><div class="pwa-step-num">2</div><div class="pwa-step-text">Chạm vào <b>···</b> ở thanh công cụ phía dưới.</div></div><div class="pwa-step"><div class="pwa-step-num">3</div><div class="pwa-step-text">Chạm vào nút <b>Chia sẻ</b> 📤 ở cửa sổ xổ ra.</div></div><div class="pwa-step"><div class="pwa-step-num">4</div><div class="pwa-step-text">Cuộn xuống và chọn <b>"Thêm vào Màn hình chính"</b> ➕</div></div><div class="pwa-step"><div class="pwa-step-num">5</div><div class="pwa-step-text">Nhấn <b>Thêm</b> ở góc trên bên phải để hoàn tất ✅</div></div><div class="pwa-divider"></div><div class="pwa-cta-text" style="font-size:16px;">Sau khi thêm, app sẽ xuất hiện trên màn hình chính iPhone 📱</div><div class="pwa-after-note"><div>✅ Sau khi cài xong, mở app từ màn hình chính</div><div>➜ không cần vào link này nữa.</div><div style="margin-top:8px;">🗑️ Khi không còn dùng, để gỡ cài đặt: Nhấn giữ icon app ➜ <b>Xoá bookmark</b></div></div><button class="pwa-illus-btn" id="pwa-illus-toggle" type="button">🖼️ Xem hình minh hoạ <span class="arrow">▼</span></button><div class="pwa-illus-img-wrap" id="pwa-illus-wrap"><img src="https://cdn-icons-png.flaticon.com/512/3345/3345875.png" alt="Hướng dẫn cài PWA trên iPhone"><div style="text-align:center; padding:12px; font-size:12px;">Hướng dẫn: Chọn "Thêm vào Màn hình chính"</div></div></div><div id="pwa-button-container"></div></div>';
  document.body.appendChild(overlay);

  let isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  let deferredPrompt = null;

  function isAppInstalled() {
    if (isStandalone) return true;
    try { return localStorage.getItem('pwa_installed') === '1'; } catch(e) { return false; }
  }

  function updateButtons() {
    const container = document.getElementById('pwa-button-container');
    if (!container) return;
    const isIOS = document.getElementById('pwa-block-ios') && !document.getElementById('pwa-block-ios').hidden;
    if (isAppInstalled() && !isIOS) {
      container.innerHTML = '<button class="pwa-ok" id="pwa-btn-ok">👍 Đã hiểu</button>';
      document.getElementById('pwa-btn-ok')?.addEventListener('click', () => {
        document.getElementById('pwa-overlay').classList.remove('active');
      });
    } else {
      container.innerHTML = '<button class="pwa-dismiss" id="pwa-btn-dismiss">Để sau</button>';
      document.getElementById('pwa-btn-dismiss')?.addEventListener('click', () => {
        document.getElementById('pwa-overlay').classList.remove('active');
      });
    }
  }

  function setAndroidView() {
    const already = document.getElementById('pwa-already-installed');
    const content = document.getElementById('pwa-install-content');
    if (isAppInstalled()) {
      if (already) already.removeAttribute('hidden');
      if (content) content.setAttribute('hidden', '');
    } else {
      if (already) already.setAttribute('hidden', '');
      if (content) content.removeAttribute('hidden');
    }
    updateButtons();
  }

  window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
    isStandalone = e.matches;
    if (e.matches) localStorage.setItem('pwa_installed', '1');
    if (!document.getElementById('pwa-block-android')?.hidden) setAndroidView();
  });

  window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa_installed', '1');
    isStandalone = true;
    setAndroidView();
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (localStorage.getItem('pwa_installed') === '1') {
      localStorage.removeItem('pwa_installed');
    }
    setAndroidView();
  });

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (!isStandalone) {
    if (!isIOS && 'serviceWorker' in navigator) {
      setTimeout(() => {
        document.getElementById('pwa-block-android')?.removeAttribute('hidden');
        document.getElementById('pwa-block-ios')?.setAttribute('hidden', '');
        setAndroidView();
        document.getElementById('pwa-overlay').classList.add('active');
      }, PWA_CONFIG.OVERLAY_DELAY);
    } else if (isIOS) {
      setTimeout(() => {
        document.getElementById('pwa-block-ios')?.removeAttribute('hidden');
        document.getElementById('pwa-block-android')?.setAttribute('hidden', '');
        updateButtons();
        document.getElementById('pwa-overlay').classList.add('active');
      }, PWA_CONFIG.IOS_DELAY);
    }
  }

  document.getElementById('pwa-btn-install')?.addEventListener('click', async () => {
    document.getElementById('pwa-overlay').classList.remove('active');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        localStorage.setItem('pwa_installed', '1');
        setAndroidView();
      }
      deferredPrompt = null;
    }
  });

  document.getElementById('pwa-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('pwa-overlay')) {
      document.getElementById('pwa-overlay').classList.remove('active');
    }
  });

  document.getElementById('pwa-illus-toggle')?.addEventListener('click', function(){
    var wrap = document.getElementById('pwa-illus-wrap');
    var btn = document.getElementById('pwa-illus-toggle');
    if (wrap && btn) {
      wrap.classList.toggle('open');
      btn.classList.toggle('open');
      var arrowSpan = btn.querySelector('.arrow');
      if (arrowSpan) {
        arrowSpan.textContent = wrap.classList.contains('open') ? '▲' : '▼';
      }
    }
  });
});