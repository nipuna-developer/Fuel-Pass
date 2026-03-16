document.addEventListener('DOMContentLoaded', () => {

    // ── Language Content ─────────────────────────────────────────────
    const translations = {
        en: {
            mainTitle: 'NATIONAL FUEL PASS',
            vehicleLabel: 'Vehicle',
            vehicleReg: 'Vehicle\nRegistration',
            vehicleLogin: 'Vehicle\nLogin',
            alertText: 'If your vehicle ownership or phone number has not changed, the QR code used previously will remain valid. If you do not currently have it, you can visit <a href="https://fuelpass.gov.lk/login">https://fuelpass.gov.lk/login</a> and download the code that belongs to you.',
            notes: [
                'Enter the Chassis number precisely as per the Certificate of Registration of Motor Vehicles (Case Sensitive)',
                'Vehicle registrations with Sri – to only enter the vehicle number in columns Ex: 3 Sri -1234 <span class="badge">3</span> <span class="badge">1234</span>',
                'Vehicle category to be selected as per Certificate of Registration of Motor Vehicle.',
                'Only one NIC/PP is allowed per vehicle and per mobile no',
                'At registration NIC/Name/Address does not require to match Certificate of registration ownership details',
                'Company and Gov vehicles/bikes can be registered under BRN category.',
                'Fuel Liter allocation will be based on vehicle category. Allocation will be announced by Ministry of power &amp; Energy',
                'Call 1919 for any registration related assistance'
            ],
            // Modal
            regTitle: 'Vehicle Registration',
            loginTitle: 'Vehicle Login',
            deleteTitle: 'Remove Existing Registration',
            deleteSubtitle: 'For removing a vehicle registered under a previous owner.',
            mobileLabel: 'Mobile Number',
            mobilePlaceholder: '07X XXX XXXX',
            nicLabel: 'NIC / Passport Number',
            nicPlaceholder: 'Enter NIC or PP',
            vehicleNumLabel: 'Vehicle Number',
            vehicleNumPlaceholder: 'WP CAA-1234',
            chassisLabel: 'Chassis Number',
            chassisPlaceholder: 'Enter exactly as in CR',
            deleteLink: 'Vehicle already registered by previous owner? Remove it here.',
            regBtn: 'Register Vehicle',
            loginMobilePlaceholder: 'Registered Mobile Number',
            otpLabel: 'OTP',
            otpPlaceholder: 'Enter OTP',
            sendOtp: 'Send OTP',
            loginBtn: 'Login',
            newCrLabel: 'New CR Book Number',
            newCrPlaceholder: 'Enter new CR book number',
            chassisExactPlaceholder: 'Exact Chassis Number',
            yourNicLabel: 'Your NIC',
            yourNicPlaceholder: 'Enter your NIC',
            declareText: 'I declare that I am the new owner of this vehicle.',
            verifyBtn: 'Verify & Remove',
            processing: 'Processing...',
            success: 'Success!',
            successMsg: 'Action completed successfully!'
        },
        si: {
            mainTitle: 'ජාතික ඉන්ධන පාස්',
            vehicleLabel: 'වාහනය',
            vehicleReg: 'වාහන\nලියාපදිංචිය',
            vehicleLogin: 'වාහන\nප්‍රවේශය',
            alertText: 'ඔබේ වාහනයේ හිමිකාරිත්වය හෝ දුරකථන අංකය වෙනස් නොවී ඇත්නම්, කලින් භාවිතා කළ QR කේතය වලංගු ව පවතිනු ඇත. ඔබ සතුව දැනට එය නැත්නම්, <a href="https://fuelpass.gov.lk/login">https://fuelpass.gov.lk/login</a> වෙත පිවිස ඔබට අදාළ කේතය බාගත කරගත හැක.',
            notes: [
                'යතුරු ලියනය හා ලිපිකරණ ලිපියෙහි (CR) සඳහන් ආකාරයෙන් චසිස් අංකය ඇතුළු කරන්න (Case Sensitive)',
                'Sri – සහිත වාහන ලියාපදිංචි සඳහා, උදා: 3 Sri -1234 <span class="badge">3</span> <span class="badge">1234</span> ලෙස ඇතුළු කරන්න',
                'ලියාපදිංචිකරණ සහතිකයේ (CR) සඳහන් අනුව වාහන වර්ගය තෝරන්න.',
                'එක් වාහනයකට සහ එක් ජංගම අංකයකට එක් NIC/PP පමණක් ලියාපදිංචි කළ හැකිය',
                'ලියාපදිංචිය සඳහා NIC/නම/ලිපිනය CR සහතිකයේ හිමිකාරිත්ව විස්තර සමඟ ගැලපීම අවශ්‍ය නොවේ',
                'සමාගම් සහ රජයේ වාහන BRN කාණ්ඩය යටතේ ලියාපදිංචි කළ හැකිය.',
                'ඉන්ධන ලීටර් ප්‍රතිපාදනය වාහන වර්ගය අනුව තීරණය වේ. ප්‍රතිපාදනය විදුලිබල හා බලශක්ති අමාත්‍යාංශය විසින් නිවේදනය කෙරේ',
                'ලියාපදිංචිය සම්බන්ධ ඕනෑම සහාය සඳහා 1919 අමතන්න'
            ],
            regTitle: 'වාහන ලියාපදිංචිය',
            loginTitle: 'වාහන ප්‍රවේශය',
            deleteTitle: 'පවතින ලියාපදිංචිය ඉවත් කිරීම',
            deleteSubtitle: 'කලින් හිමිකරු යටතේ ලියාපදිංචි කළ වාහනයක් ඉවත් කිරීම සඳහා.',
            mobileLabel: 'ජංගම අංකය',
            mobilePlaceholder: '07X XXX XXXX',
            nicLabel: 'ජාතික හැඳුනුම්පත / ගමන් බලපත්‍ර අංකය',
            nicPlaceholder: 'NIC හෝ PP ඇතුළු කරන්න',
            vehicleNumLabel: 'වාහන අංකය',
            vehicleNumPlaceholder: 'WP CAA-1234',
            chassisLabel: 'චසිස් අංකය',
            chassisPlaceholder: 'CR හි ඇති ආකාරයෙන් ඇතුළු කරන්න',
            deleteLink: 'කලින් හිමිකරු විසින් ලියාපදිංචි කළ වාහනයක්ද? මෙතැනින් ඉවත් කරන්න.',
            regBtn: 'වාහනය ලියාපදිංචි කරන්න',
            loginMobilePlaceholder: 'ලියාපදිංචි ජංගම අංකය',
            otpLabel: 'OTP',
            otpPlaceholder: 'OTP ඇතුළු කරන්න',
            sendOtp: 'OTP යවන්න',
            loginBtn: 'ප්‍රවේශ වන්න',
            newCrLabel: 'නව CR පොත් අංකය',
            newCrPlaceholder: 'නව CR පොත් අංකය ඇතුළු කරන්න',
            chassisExactPlaceholder: 'නිශ්චිත චසිස් අංකය',
            yourNicLabel: 'ඔබේ NIC',
            yourNicPlaceholder: 'ඔබේ NIC ඇතුළු කරන්න',
            declareText: 'මම මෙම වාහනයේ නව හිමිකරු බව ප්‍රකාශ කරමි.',
            verifyBtn: 'තහවුරු කර ඉවත් කරන්න',
            processing: 'සකසමින්...',
            success: 'සාර්ථකයි!',
            successMsg: 'ක්‍රියාව සාර්ථකව සිදු කෙරිණි!'
        },
        ta: {
            mainTitle: 'தேசிய எரிபொருள் பாஸ்',
            vehicleLabel: 'வாகனம்',
            vehicleReg: 'வாகன\nபதிவு',
            vehicleLogin: 'வாகன\nஉள்நுழைவு',
            alertText: 'உங்கள் வாகன உரிமை அல்லது தொலைபேசி எண் மாறவில்லை என்றால், முன்பு பயன்படுத்திய QR குறியீடு செல்லுபடியாகும். தற்போது உங்களிடம் இல்லையெனில், <a href="https://fuelpass.gov.lk/login">https://fuelpass.gov.lk/login</a> இல் உள்நுழைந்து உங்கள் குறியீட்டை பதிவிறக்கம் செய்யலாம்.',
            notes: [
                'வாகன பதிவு சான்றிதழில் (CR) உள்ளபடி சேஸிஸ் எண்ணை சரியாக உள்ளிடவும் (Case Sensitive)',
                'Sri – கொண்ட வாகன பதிவுகளுக்கு, எ.கா: 3 Sri -1234 <span class="badge">3</span> <span class="badge">1234</span> என உள்ளிடவும்',
                'வாகன பதிவு சான்றிதழின்படி வாகன வகையை தேர்ந்தெடுக்கவும்.',
                'ஒரு வாகனத்திற்கும் ஒரு கைபேசி எண்ணிற்கும் ஒரே ஒரு NIC/PP மட்டுமே அனுமதிக்கப்படும்',
                'பதிவு செய்யும்போது NIC/பெயர்/முகவரி CR சான்றிதழ் உரிமை விவரங்களுடன் பொருந்த வேண்டியதில்லை',
                'நிறுவன மற்றும் அரசு வாகனங்களை BRN வகையின் கீழ் பதிவு செய்யலாம்.',
                'எரிபொருள் லிட்டர் ஒதுக்கீடு வாகன வகையின் அடிப்படையில் இருக்கும். மின்சாரம் மற்றும் ஆற்றல் அமைச்சால் அறிவிக்கப்படும்',
                'பதிவு தொடர்பான உதவிக்கு 1919 ஐ அழைக்கவும்'
            ],
            regTitle: 'வாகன பதிவு',
            loginTitle: 'வாகன உள்நுழைவு',
            deleteTitle: 'தற்போதைய பதிவை நீக்கவும்',
            deleteSubtitle: 'முந்தைய உரிமையாளர் பெயரில் பதிவான வாகனத்தை நீக்க.',
            mobileLabel: 'மொபைல் எண்',
            mobilePlaceholder: '07X XXX XXXX',
            nicLabel: 'தேசிய அடையாள அட்டை / பாஸ்போர்ட் எண்',
            nicPlaceholder: 'NIC அல்லது PP உள்ளிடவும்',
            vehicleNumLabel: 'வாகன எண்',
            vehicleNumPlaceholder: 'WP CAA-1234',
            chassisLabel: 'சேஸிஸ் எண்',
            chassisPlaceholder: 'CR இல் உள்ளபடி உள்ளிடவும்',
            deleteLink: 'முந்தைய உரிமையாளர் பதிவு செய்த வாகனமா? இங்கே நீக்கவும்.',
            regBtn: 'வாகனத்தை பதிவு செய்யவும்',
            loginMobilePlaceholder: 'பதிவு செய்த மொபைல் எண்',
            otpLabel: 'OTP',
            otpPlaceholder: 'OTP உள்ளிடவும்',
            sendOtp: 'OTP அனுப்பவும்',
            loginBtn: 'உள்நுழைவு',
            newCrLabel: 'புதிய CR புத்தக எண்',
            newCrPlaceholder: 'புதிய CR புத்தக எண்ணை உள்ளிடவும்',
            chassisExactPlaceholder: 'சரியான சேஸிஸ் எண்',
            yourNicLabel: 'உங்கள் NIC',
            yourNicPlaceholder: 'உங்கள் NIC உள்ளிடவும்',
            declareText: 'இந்த வாகனத்தின் புதிய உரிமையாளன் நான் என்று அறிவிக்கிறேன்.',
            verifyBtn: 'சரிபார்த்து நீக்கவும்',
            processing: 'செயலாக்கம்...',
            success: 'வெற்றி!',
            successMsg: 'நடவடிக்கை வெற்றிகரமாக முடிந்தது!'
        }
    };

    let currentLang = 'en';

    function applyLanguage(lang) {
        const t = translations[lang];

        // Main page content
        document.querySelector('.main-title').textContent = t.mainTitle;
        document.querySelector('.section-subtitle').textContent = t.vehicleLabel;

        const actionBtnsEl = document.querySelectorAll('.action-btn span');
        if (actionBtnsEl[0]) actionBtnsEl[0].innerHTML = t.vehicleReg.replace('\n', '<br>');
        if (actionBtnsEl[1]) actionBtnsEl[1].innerHTML = t.vehicleLogin.replace('\n', '<br>');

        document.querySelector('.info-alert p').innerHTML = t.alertText;

        // Notes list
        const noteItems = document.querySelectorAll('.notes-list > li');
        t.notes.forEach((note, i) => {
            if (noteItems[i]) {
                // Preserve sub-list if exists
                const subList = noteItems[i].querySelector('ul');
                noteItems[i].innerHTML = note;
                if (subList) noteItems[i].appendChild(subList);
            }
        });

        // ── Registration Modal ──
        document.querySelector('#registerModal .modal-header h2').textContent = t.regTitle;
        const regForm = document.getElementById('registerForm');
        regForm.querySelectorAll('label')[0].textContent = t.mobileLabel;
        regForm.querySelectorAll('input')[0].placeholder = t.mobilePlaceholder;
        regForm.querySelectorAll('label')[1].textContent = t.nicLabel;
        regForm.querySelectorAll('input')[1].placeholder = t.nicPlaceholder;
        regForm.querySelectorAll('label')[2].textContent = t.vehicleNumLabel;
        regForm.querySelectorAll('input')[2].placeholder = t.vehicleNumPlaceholder;
        regForm.querySelectorAll('label')[3].textContent = t.chassisLabel;
        regForm.querySelectorAll('input')[3].placeholder = t.chassisPlaceholder;
        document.getElementById('openDeleteModalBtn').textContent = t.deleteLink;
        regForm.querySelector('.submit-btn').textContent = t.regBtn;

        // ── Login Modal ──
        document.querySelector('#loginModal .modal-header h2').textContent = t.loginTitle;
        const loginForm = document.getElementById('loginForm');
        loginForm.querySelectorAll('label')[0].textContent = t.mobileLabel;
        loginForm.querySelectorAll('input')[0].placeholder = t.loginMobilePlaceholder;
        loginForm.querySelectorAll('label')[1].textContent = t.otpLabel;
        loginForm.querySelectorAll('input')[1].placeholder = t.otpPlaceholder;
        loginForm.querySelector('.btn-secondary').textContent = t.sendOtp;
        loginForm.querySelector('.submit-btn').textContent = t.loginBtn;

        // ── Delete Modal ──
        document.querySelector('#deleteModal .modal-header h2').textContent = t.deleteTitle;
        document.querySelector('#deleteModal .modal-header p').textContent = t.deleteSubtitle;
        const deleteForm = document.getElementById('deleteForm');
        deleteForm.querySelectorAll('label')[0].textContent = t.vehicleNumLabel;
        deleteForm.querySelectorAll('input')[0].placeholder = t.vehicleNumPlaceholder;
        deleteForm.querySelectorAll('label')[1].textContent = t.newCrLabel;
        deleteForm.querySelectorAll('input')[1].placeholder = t.newCrPlaceholder;
        deleteForm.querySelectorAll('label')[2].textContent = t.chassisLabel;
        deleteForm.querySelectorAll('input')[2].placeholder = t.chassisExactPlaceholder;
        deleteForm.querySelectorAll('label')[3].textContent = t.yourNicLabel;
        deleteForm.querySelectorAll('input')[3].placeholder = t.yourNicPlaceholder;
        const declareLabel = deleteForm.querySelector('label[for="declareCheck"]');
        if (declareLabel) declareLabel.textContent = t.declareText;
        deleteForm.querySelector('.submit-btn').textContent = t.verifyBtn;
    }

    // ── Language Button Switching ─────────────────────────────────────
    const langBtns = document.querySelectorAll('.lang-btn');
    const langMap = ['en', 'si', 'ta'];

    langBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = langMap[idx];
            applyLanguage(currentLang);
        });
    });

    // ── Modal elements ────────────────────────────────────────────────
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    const deleteModal = document.getElementById('deleteModal');

    // Main action buttons
    const actionBtnsEl = document.querySelectorAll('.action-btn');
    actionBtnsEl.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.innerText.replace(/\n/g, ' ').trim();
            // Check against all 3 languages
            const regWords = ['Registration', 'ලියාபදිංචිය', 'பதிவு'];
            const loginWords = ['Login', 'ප්‍රවේශය', 'உள்நுழைவு'];
            if (regWords.some(w => text.includes(w))) {
                registerModal.classList.add('show');
            } else if (loginWords.some(w => text.includes(w))) {
                loginModal.classList.add('show');
            }
        });
    });

    // Close buttons for modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).classList.remove('show');
        });
    });

    // Close modal on clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });

    // Trigger Delete/Transfer modal
    const openDeleteModalBtn = document.getElementById('openDeleteModalBtn');
    if (openDeleteModalBtn) {
        openDeleteModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.remove('show');
            deleteModal.classList.add('show');
        });
    }

    // ── Registration OTP Flow ─────────────────────────────────────────
    const registerForm = document.getElementById('registerForm');
    const regOtpStep = document.getElementById('regOtpStep');
    const regOtpInput = document.getElementById('regOtpInput');
    const otpPhoneDisplay = document.getElementById('otpPhoneDisplay');
    const verifyRegOtpBtn = document.getElementById('verifyRegOtpBtn');
    const backToRegFormBtn = document.getElementById('backToRegFormBtn');
    const resendOtpBtn = document.getElementById('resendOtpBtn');

    // Step 1: Registration form submit → show OTP panel
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const t = translations[currentLang];
        const phoneInput = registerForm.querySelectorAll('input')[0];
        const phone = phoneInput.value.trim();

        // Show OTP step, hide form
        registerForm.style.display = 'none';
        otpPhoneDisplay.textContent = phone;
        regOtpInput.value = '';
        regOtpStep.style.display = 'block';
        regOtpInput.focus();
    });

    // Back button → return to form
    backToRegFormBtn.addEventListener('click', () => {
        regOtpStep.style.display = 'none';
        registerForm.style.display = 'flex';
    });

    // Resend OTP
    resendOtpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resendOtpBtn.textContent = 'Sent!';
        resendOtpBtn.style.color = '#10b981';
        setTimeout(() => {
            resendOtpBtn.textContent = translations[currentLang].sendOtp || 'Resend OTP';
            resendOtpBtn.style.color = '';
        }, 2000);
    });

    // Step 2: Verify OTP → success
    verifyRegOtpBtn.addEventListener('click', () => {
        const t = translations[currentLang];
        const otp = regOtpInput.value.trim();
        if (otp.length < 4) {
            regOtpInput.style.borderColor = '#ef4444';
            regOtpInput.placeholder = 'Enter valid OTP!';
            return;
        }
        regOtpInput.style.borderColor = '';
        verifyRegOtpBtn.textContent = t.processing;
        verifyRegOtpBtn.disabled = true;

        setTimeout(() => {
            verifyRegOtpBtn.textContent = t.success;
            verifyRegOtpBtn.style.backgroundColor = '#10b981';
            setTimeout(() => {
                // Reset everything
                verifyRegOtpBtn.textContent = 'Verify & Register';
                verifyRegOtpBtn.disabled = false;
                verifyRegOtpBtn.style.backgroundColor = '';
                regOtpStep.style.display = 'none';
                registerForm.style.display = 'flex';
                registerForm.reset();
                registerModal.classList.remove('show');
                alert(t.successMsg);
            }, 1000);
        }, 1500);
    });

    // Reset OTP step when modal closes
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).classList.remove('show');
            if (modalId === 'registerModal') {
                regOtpStep.style.display = 'none';
                registerForm.style.display = 'flex';
            }
        });
    });

    // Form submissions for Login & Delete modals only (Registration handled above)
    document.querySelectorAll('#loginForm, #deleteForm').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const t = translations[currentLang];
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerText;
            btn.innerText = t.processing;
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = t.success;
                btn.style.backgroundColor = '#10b981';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    form.reset();
                    form.closest('.modal').classList.remove('show');
                    alert(t.successMsg);
                }, 1000);
            }, 1500);
        });
    });
});
