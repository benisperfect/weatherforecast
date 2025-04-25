<template>
    <div class="loginoutscreen" id="loginoutscreen">
        <div id="loginscreentext">WEATHER</div>
        <div class="logsigninbutton">
            <div class="loginbox" id="loginlabel">
                <div id="logintext">LOG IN</div>
                <input type="text" id="username" placeholder="Username or Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <div class="loginbuttonbox" id="loginbuttonbox">
                    <button id="loginbutton">Login</button>
                    <button id="signupbutton">Sign up</button>
                </div>
            </div>
            <div id="incorrectlogintext"></div>
        </div>
    </div>
</template>
