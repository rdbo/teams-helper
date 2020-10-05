function open_credits()
{
    teams_helper_repository = "https://github.com/rdbo/teams-helper";
    teams_js_repository = "https://github.com/rdbo/teams-js";
    chrome.tabs.create({"url" : teams_js_repository});
    chrome.tabs.create({"url" : teams_helper_repository});
}

function hangup_call_time()
{
    in_call_time = document.getElementById("in_call_time");
    chrome.runtime.sendMessage({msg: "hangup_call_time", arg0: in_call_time.value});
}

function hangup_system_time()
{
    in_sys_time = document.getElementById("in_sys_time");
    chrome.runtime.sendMessage({msg: "hangup_system_time", arg0: in_sys_time.value});
}

function hangup_member_count()
{
    in_member_count = document.getElementById("in_member_count");
    chrome.runtime.sendMessage({msg: "hangup_member_count", arg0: in_member_count.value});
}

function clear_queues()
{
    chrome.runtime.sendMessage({msg: "clear_queues"});
}

function init_popup()
{
    btn_call_time = document.getElementById("btn_call_time");
    btn_call_time.addEventListener("click", hangup_call_time);

    btn_sys_time = document.getElementById("btn_sys_time");
    btn_sys_time.addEventListener("click", hangup_system_time);

    btn_member_count = document.getElementById("btn_member_count");
    btn_member_count.addEventListener("click", hangup_member_count);

    logo = document.getElementById("logo");
    logo.addEventListener("click", open_credits);

    btn_clear = document.getElementById("btn_clear");
    btn_clear.addEventListener("click", clear_queues);
}

init_popup();