function bg_load_tms()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {msg: "bg_load_tms" });
    });
}

function bg_hangup_call_time(time)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {msg: "bg_hangup_call_time", arg0: time });
    });
}

function bg_hangup_system_time(time)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {msg: "bg_hangup_system_time", arg0: time });
    });
}

function bg_hangup_member_count(member_count)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {msg: "bg_hangup_member_count", arg0: member_count });
    });
}

function bg_clear_queues()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {msg: "bg_clear_queues"});
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){

        console.log(`Received message: ${request.msg}`);

        switch(request.msg)
        {
            case "load_tms":
                bg_load_tms();
                break;

            case "hangup_call_time":
                console.log(`Requesting hangup on call time '${request.arg0}'`);
                bg_hangup_call_time(request.arg0);
                break;

            case "hangup_system_time" :
                console.log(`Requesting hangup on system time '${request.arg0}'`);
                bg_hangup_system_time(request.arg0);
                break;

            case "hangup_member_count":
                console.log(`Requesting hangup on member count '${request.arg0}'`);
                bg_hangup_member_count(request.arg0);
                break;

            case "clear_queues":
                console.log(`Requesting 'clear queues'`);
                bg_clear_queues();
                break;
        }
    }
);