import { useEffect } from "react";
import $ from 'jquery';

export default function Progress() {

    const moveProgressBar = () => {
        console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
    
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
      }
    
      useEffect(() => {
        moveProgressBar();
    
        // on browser resize...
        $(window).resize(function() {
          moveProgressBar();
        });
      }, []);

    return (

        <>
            <div className="progress-wrap progress" data-progress-percent="25">
                <div className="progress-bar progress"></div>
            </div>
        </>
    )
}