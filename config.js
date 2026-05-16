// =============================================================
//  CONFIG.JS — Cấu hình toàn bộ ứng dụng Quản trị Hội nghị
//  Chỉnh sửa file này để cập nhật link, mật khẩu, tiêu đề...
//  Không cần đụng vào admin.html hay index.html
// =============================================================

const APP_CONFIG = {

    // ----------------------------------------------------------
    //  1. GOOGLE APPS SCRIPT WEB APP URL
    //     Thay bằng URL mới mỗi khi bạn deploy lại Google Script
    // ----------------------------------------------------------
    WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbz4V0EFUVp8E0v8YU75Dsyshx1af4n_CtRr9GH91gHwLGzqNsn5wqIXFhRSfBLnbL97/exec',

    // ----------------------------------------------------------
    //  2. MẬT KHẨU QUẢN TRỊ (SHA-256 hash)
    //     Tạo hash mới tại: https://emn178.github.io/online-tools/sha256.html
    //     Hash hiện tại tương ứng với mật khẩu gốc của bạn
    // ----------------------------------------------------------
    ADMIN_PASSWORD_HASH: '6051fc84a7a0d74c225fb18a496b09952da5642e60723ecae543298edd7d82d6',

    // ----------------------------------------------------------
    //  3. LIÊN KẾT ĐIỀU HƯỚNG
    // ----------------------------------------------------------
    HOME_URL: 'index.html',          // Trang chủ (Về trang chủ / bottom nav)

    // ----------------------------------------------------------
    //  4. TIÊU ĐỀ & NỘI DUNG HIỂN THỊ
    // ----------------------------------------------------------
    APP_TITLE:    'Duyệt Ý Kiến',
    APP_SUBTITLE: 'Quản lý phát biểu tại hội nghị',
    LOGIN_TITLE:  'Quản trị viên',
    LOGIN_SUB:    'Đăng nhập để quản lý ý kiến hội nghị',

    // ----------------------------------------------------------
    //  5. PHẢN HỒI MẶC ĐỊNH KHI "TIẾP NHẬN" Ý KIẾN
    // ----------------------------------------------------------
    DEFAULT_CT_FEEDBACK: 'Đã tiếp nhận ý kiến, chủ toạ sẽ trả lời khi kết luận',

    // ----------------------------------------------------------
    //  6. TẦN SUẤT TỰ ĐỘNG LÀM MỚI DANH SÁCH (mili-giây)
    //     12000 = 12 giây
    // ----------------------------------------------------------
    AUTO_REFRESH_MS: 12000,

};
