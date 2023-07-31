

        
    function getMinutesBetweenDates(startDate, endDate) {
        let diff = endDate.getTime() - startDate.getTime();
        diff = diff / 60000;
        diff = Math.abs(Math.round(diff));
        return diff;
    }

    function timeDiff(start,end)
    {
        let diffhr =(start.getTime() - end.getTime()) / 1000;
        diffhr /= (60 * 60);
        let hrs = Math.abs(Math.round(diffhr));
        diffhr -= hrs * 1000 * 60 * 60;
        let minutes = getMinutesBetweenDates(start,end);
        
        let timeElapsed = '';
        if(hrs > 24)
        {
            hrs = hrs / 24;
            hrs = Math.abs(Math.round(hrs));
            if(hrs > 1)
            {
                return timeElapsed = hrs +' days ago';
            }
            else
            {
                return timeElapsed = hrs +' day ago';
            }
        }
        else if(hrs <= 23 && hrs > 1)
        {
            return timeElapsed = hrs+' hours ago';
        }
        else if(minutes <= 59)
        {
            if(minutes > 1)
            {
                return timeElapsed = minutes+' minutes ago';
            }
            else if(minutes == 1)
            {
                return timeElapsed = minutes+' minute ago';
            }
        }
        else
        {
            return timeElapsed = hrs+' hour ago';
        }
    }

    $('#msgnotifications').html('');
    document.addEventListener("DOMContentLoaded", function(){
        const msgurl = `${BASE_URL}/get-inbox-data`;
        $.ajax({
            type: "GET",
            url:  msgurl,
            success: function(messages) {
                const msg = JSON.parse(messages.data);
                let unreadmsg = 0;
                msg.forEach(msgdata => {
                    let useravatar = 'avatar.png';
                    let memberurl = `${BASE_URL}/get-sender-info/${msgdata.Sender.Member_ID}`;
                    $.ajax({
                        type: "GET",
                        url:  memberurl,
                        success: function(member) {
                            if(member!='')
                            {
                                useravatar = member.memberid+'/'+member.photo;
                            }
                            let end = new Date(`{{ $currentDate }}`);
                            let dateOptions = { year: "numeric", month: "long", day: "numeric" };
                            let currDateStr = end.toLocaleDateString(
                                "en-PH",
                                this.dateOptions
                            );
                            let start = new Date(msgdata.DateReceived);

                            if(msgdata.Status == 'Unread')
                            {
                                unreadmsg = unreadmsg + 1;
                                let timeElapsed = timeDiff(start,end);                                
                                $('#msgnotifications').append(`<a class="dropdown-item btn btn-md text-left" id="${msgdata.Inbox_ID}" > <div class="media"> <img src="${BASE_URL}/memberfiles/${useravatar}" alt="User Avatar" class="img-size-50 mr-3 img-circle"> <div class="media-body"> <h3 class="dropdown-item-title"> ${msgdata.Sender.name} </h3> <p class="text-sm text-bold mb-1">${msgdata.Subject}</p> <p class="text-sm text-muted m-0"><i class="far fa-clock mr-1"></i> ${timeElapsed}</p> </div> </div> </a>`);
                            }
                            $('.unreadmsg').html(unreadmsg);
                            $('.unreadmsgtitle').attr('title',unreadmsg+' Messages');
                        }
                    });
                });
            }
        });
    });
    // $('#msgnotifications').append('<a class="dropdown-item btn btn-md text-center text-primary" href="{{ URL::to(`/`) }}/dashboard/inbox">See all unread messages</a>')
    