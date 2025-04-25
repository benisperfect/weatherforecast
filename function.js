import * as data from './const.js';

export const RotateAndShowMenuSideBar = () => {
    if (data.menuButton.style.transform === "rotate(90deg)") {
        data.menuButton.style.transition = "transform 0.3s ease";
        data.menuButton.style.transform = "rotate(0deg)";
    } else {
        data.menuButton.style.transition = "transform 0.3s ease";
        data.menuButton.style.transform = "rotate(90deg)";
        data.sidebar.style.display = "block";
        data.sidebar.style.left = "0";
    }
};

export const HomeTextButton = () => {
    data.sidebar.style.left = "-250px";
    data.menuButton.style.transform = "rotate(0deg)";
}

export const RotateAndShowSettingSideBar = () => {
    data.signinbar.style.display = "block";
}

export const settingButtonText = () => {
    data.signinbar.style.display = "none";
}

export const loginoutScreen = () => {
    data.mainscreen.style.display = "none";
    data.loginoutScreen.style.display = "block";
}

export const LoginButton = () => {
    data.incorrectloginText.innerText = "";
    let username = data.usernamelabel.value.trim();
    let password = data.passwordlabel.value.trim();

    if (!username || !password) {
        data.incorrectloginText.innerText = "Please enter your username and password.";
        data.incorrectloginText.style.color = "red";
        return;
    }

    if (username === "benisperfect" && password === "ben123") {
        data.incorrectloginText.innerText = "Login successful!";
        data.incorrectloginText.style.color = "green";
        data.incorrectloginText.classList.remove("disappear1");

        setTimeout(() => {
            data.mainscreen.style.display = "block";
            data.loginoutScreen.style.display = "none";
            document.getElementById("user-info").innerText = `Hello, ${username}.`;
        }, 1000);

        data.profile.src = './image/user_profile/user1.png';
        data.signinbar.style.display = "none";

    } else {
        data.incorrectloginText.innerText = "Incorrect username or password.";
        data.incorrectloginText.style.color = "red";
        data.incorrectloginText.classList.remove("disappear1");
    }
}

export const LogoutButton = () => {
    data.mainscreen.style.display = "none";
    data.loginoutScreen.style.display = "block";
    data.usernamelabel.value = "";
    data.passwordlabel.value = "";
    data.incorrectloginText.innerText = "";
    data.profile.src = '';
}

let isDark = false;
export const darkLightToggle = () => {
    isDark = !isDark;
    if (isDark) {
        data.darklight.src = './image/interactive_btn/dayicon.png';
        data.mainscreen.style.backgroundColor = "#000000";
        data.profileText.style.color = "#ffffff";
        data.sidebar.style.backgroundColor = "#ffffff";
        data.body.style.backgroundColor = "#000000";
        data.sidebarpic.src = './image/interactive_btn/menu(light).png';
        const sidebarLinks = data.sidebar.querySelectorAll("a");
        sidebarLinks.forEach(link => {
            link.style.color = "#000000";
        });
    } else {
        data.darklight.src = './image/interactive_btn/nighticon.png';
        data.mainscreen.style.backgroundColor = "#ffffff";
        data.profileText.style.color = "#000000";
        data.sidebar.style.backgroundColor = "#000000";
        data.body.style.backgroundColor = "#ffffff";
        data.sidebarpic.src = './image/interactive_btn/menu(dark).png';
        const sidebarLinks = data.sidebar.querySelectorAll("a");
        sidebarLinks.forEach(link => {
            link.style.color = "#ffffff";
        });
    }
    console.log(data.darklight.src);
};

