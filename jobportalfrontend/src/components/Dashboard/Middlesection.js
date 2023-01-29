import React from "react"
import './middlesection.css'

export default function Middlesection(){
	return(
        <div className="middlesection">
           <div className="snapshot_outside_boundary">
            <h5 className="snapshot">Snapshots</h5>
            <div className="snapshot_inner_item_boundary">
                <div className="all_job_section">
                   <div className="all_job_inner_frame">
                    <div className="all_job_icon_frame all_job_icon_ecllipse">
                        {/* <div className=" all_job_icon_vector">
                           <div></div>
                        </div> */}
                    </div>
                    <div className="_all_job_text_display">
                        <div className="all_job_text1">
                        All Jobs
                        </div > 
                        <div className="all_job_text2">
                        100
                        </div>
                    </div>
                    {/* <div className="all_jobs_right_arrow">

                    </div> */}
                    
                    </div>
                </div>
                <div className="eligible_job_section">
                   <div className="eligible_job_inner_frame">
                    <div className="eligible_job_icon_frame all_job_icon_ecllipse">
                       
                    </div>
                    <div className="_eligible_job_text_display">
                        <div className="eligible_job_text1">
                        Eligible Jobs
                        </div > 
                        <div className="eligible_job_text2">
                        100
                        </div>
                    </div>
                                        
                    </div>
                </div>
                 
                {/* <div>Eligible Jobs</div> */}
                <div className="applied_job_section">
                   <div className="applied_job_inner_frame">
                    <div className="applied_job_icon_frame all_job_icon_ecllipse">
                       
                    </div>
                    <div className="_applied_job_text_display">
                        <div className="applied_job_text1">
                        Applied Jobs
                        </div > 
                        <div className="applied_job_text2">
                        100
                        </div>
                    </div>
                                        
                    </div>
                </div>
                {/* <div>Applied Job</div> */} 
            </div>
           </div>
           {/* <div>
            <h5> My Application</h5>
                <div>ShortListed</div>
                <div>Interviewing</div>
                <div>Rejected</div>
                <div>Offer Recieved</div>
           </div> */}
           <div></div>
        </div>
	)
}