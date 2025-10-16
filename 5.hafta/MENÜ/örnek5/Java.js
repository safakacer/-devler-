function verify() {
    // Gerekli HTML elemanlarını seçiyoruz
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var msg = ""; // Hata mesajlarını biriktireceğimiz değişken

    // Hata kontrolünden önce stilleri sıfırlamak iyi bir pratiktir
    user.className = "inpBox";
    pass.className = "inpBox";

    // Kullanıcı adı boş mu kontrol et
    if (user.value == "") {
        msg += "Please enter a username ! \n";
        user.className = "inpBoxError"; // Hata varsa CSS sınıfını değiştir
    }

    // Şifre boş mu kontrol et
    if (pass.value == "") {
        msg += "Please enter a password ! \n";
        pass.className = "inpBoxError"; // Hata varsa CSS sınıfını değiştir
    }

    // Hata mesajı birikmiş mi kontrol et
    if (msg == "") {
        return true; // Hata yoksa formun gönderilmesine izin ver
    } else {
        alert(msg); // Hata varsa mesajları göster
        return false; // Formun gönderilmesini engelle
    }
}