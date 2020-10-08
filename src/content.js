tms_loaded = false;

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function inject_file(file)
{
    var script = document.createElement("script");
    script.src = chrome.runtime.getURL(file);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

function inject_code(code)
{
    var script = document.createElement("script");
    script.textContent = code;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
}

function load_tms()
{
    if(!tms_loaded)
    {
        inject_file("teams.js");
        tms_loaded = true;
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){

        console.log(`Received message: ${request.msg}`);

        load_tms();

        switch(request.msg)
        {
            case "bg_hangup_call_time":
                console.log(`Hanging up on call time: ${request.arg0}`);
                inject_code(`tms_hangup_on_call_time("${request.arg0}");`);
                break;

            case "bg_hangup_system_time":
                console.log(`Hanging up on system time: ${request.arg0}`);
                inject_code(`tms_hangup_on_system_time("${request.arg0}");`);
                break;

            case "bg_hangup_member_count":
                console.log(`Hanging up on member count: ${request.arg0}`);
                inject_code(`tms_hangup_on_member_count("${request.arg0}");`);
                break;

            case "bg_clear_queues":
                console.log(`Clearing queues`);
                inject_code(`tms_clear_queues();`);
                break;
        }
    }
);