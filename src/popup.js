function test(input)
{
    alert(input);
}

function open_tab_repository()
{
    repository = "https://github.com/rdbo/teams-helper";
    chrome.tabs.create({"url" : repository});
}

function hangup_call_time()
{
    in_call_time = document.getElementById("in_call_time");
    test(in_call_time.value);
}

function hangup_system_time()
{
    in_sys_time = document.getElementById("in_sys_time");
    test(in_sys_time.value);
}

function hangup_member_count()
{
    in_member_count = document.getElementById("in_member_count");
    test(in_member_count.value);
}

function startup()
{
    btn_call_time = document.getElementById("btn_call_time");
    btn_call_time.addEventListener("click", hangup_call_time);

    btn_sys_time = document.getElementById("btn_sys_time");
    btn_sys_time.addEventListener("click", hangup_system_time);

    btn_member_count = document.getElementById("btn_member_count");
    btn_member_count.addEventListener("click", hangup_member_count);

    logo = document.getElementById("logo");
    logo.addEventListener("click", open_tab_repository);
}

startup();