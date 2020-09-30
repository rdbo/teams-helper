function test(input)
{
    alert(input);
}

function hangup_call_time()
{
    in_call_time = document.getElementById("in_call_time");
    test(in_call_time.value);
}

function startup()
{
    btn_call_time = document.getElementById("btn_call_time");
    btn_call_time.addEventListener("click", hangup_call_time);
}

startup();