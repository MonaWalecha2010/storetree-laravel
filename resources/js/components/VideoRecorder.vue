<template>
    <div class="video_recorder_wrapper">
        <div v-if="this.overlay" :class="this.overlay? 'overlay d-flex justify-content-center align-items-center':'' ">
            <p class="text-center">After {{ count }} Seconds <br>
                Your recording will begin</p>
        </div>
        <div v-if="this.spinner" :class="this.spinner? 'overlay d-flex justify-content-center align-items-center':'' ">
            <p class="text-center">Uploading is in progress, please wait until it is done <br>
            <span v-if="spinner"><img style="width: 480px; height: 370px;" src="/images/frontend/loader-animation.gif" alt=""></span></p>
        </div>
        <div class="qs_top_block">
            <p>{{ currentQuestion.title }} <span v-if="spinner"><img style="width: 30px; height: 30px;" src="/images/frontend/spinner.gif" alt=""></span></p>
        </div><!--qs_top_block-->
        <div class="video_recor_area">
            <video id="myVideo" class="video-js vjs-default-skin">
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, or consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                        supports HTML5 video.
                    </a>
                </p>
            </video>
        </div><!--video_recor_area-->
        <div class="rc_button_group_bottom">
            <div class="player_button_left">
                <button class="btn_record" v-if="(!isStartRecording && !options.bigPlayButton && !options.bigPauseButton)" @click="startRecording()" title="Record"></button>
                <button class="btn_pause" v-if="!isPauseDisabled" @click="pauseRecording()" title="Pause"></button>
                <button class="btn_play" v-if="!isResumeDisabled" @click="resumeRecording()" title="Resume"></button>
                <button class="btn_stop" v-if="!isStopRecording" @click="stopRecording()" title="Stop"></button>
                <button class="btn_play" v-if="options.bigPlayButton" @click="playVideo()" title="play video"></button>
                <button class="btn_pause" v-if="options.bigPauseButton" @click="pauseVideo()" title="pause video"></button>
        

                <!-- <button><p>{{ currTime }}</p></button> -->
            </div><!--player_button_left-->
            <div class="recorder_review_button">
                <button :class="btn_accept green_color_background" title="Play" v-if="isPauseDisabled"> Play </button>
                <button :class="isRetakeDisabled?'btn_re-record':'red_color_background'" :disabled="isRetakeDisabled" data-toggle="modal" data-target="#retake-video" ref="retakeVideo" title="Re-record">Re-record</button>
                <button :class="isSaveDisabled?'btn_accept gray_color_background':'btn_accept green_color_background'" @click="submitVideo()" :disabled="isSaveDisabled" title="Accept">{{ submitText }}</button>
                <button v-if="retry"  @click="submitVideo" class="red_color_background" title="Retry Upload video">Retry</button>
            </div><!--recorder_review_button-->
        </div><!--rc_button_group_bottom-->

        <div class="modal fade modal-vcenter modal_small" id="retake-video" ref="retakeVideo" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="modal_tittle">
                                    <h2>Are You Sure You Want to Re-Record This Question ?</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row padding_gap_3">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="modal_confirm_btn"><a href="#" @click.prevent="retakeVideo()" data-dismiss="modal">Yes</a></div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <div class="modal_cancel_btn"><a href="#" data-dismiss="modal" aria-label="Close">Cancel</a></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div><!--video_recorder_wrapper-->

        
    <!-- <button type="button" class="btn btn-info" @click.prevent="startRecording()" v-bind:disabled="isStartRecording" id="btnStart">Start Recording</button>
    <button type="button" class="btn btn-info" @click.prevent="resumeRecording()" v-bind:disabled="isResumeDisabled">Resume</button>
    <button type="button" class="btn btn-info" @click.prevent="pauseRecording()" v-bind:disabled="isPauseDisabled">Pause</button>
    <button type="button" class="btn btn-success" @click.prevent="submitVideo()" v-bind:disabled="isSaveDisabled" id="btnSave">{{ submitText }}</button>
    <button type="button" class="btn btn-primary" @click.prevent="retakeVideo()" v-bind:disabled="isRetakeDisabled" id="btnRetake">Retake</button> -->
</template>

<script>
import 'video.js/dist/video-js.css'
import 'videojs-record/dist/css/videojs.record.css'
import videojs from 'video.js'
import 'webrtc-adapter'
import RecordRTC from 'recordrtc'
import Record from 'videojs-record/dist/videojs.record.js'
import FFmpegjsEngine from 'videojs-record/dist/plugins/videojs.record.ffmpegjs.js';
import Swal from 'sweetalert2'

export default {
    props: ['upload_url', 'question', 'warmup', 'chunk'],
    data() {
        return {
            player: '',
            retake: 0,
            isSaveDisabled: true,
            isStartRecording: false,
            isStopRecording: true,
            isResumeDisabled: true,
            isPauseDisabled: true,
            isRetakeDisabled: true,
            submitText: 'Accept',
            options: {
                controls: true,
                autoplay: false,
                bigPlayButton: false,
                bigPauseButton: false,
                controlBar: {
                    deviceButton: false,
                    recordToggle: false,
                    pipToggle: false
                },
                width: 1020,
                height: 1080,
                plugins: {
                    record: {
                        pip: false,
                        audio: true,
                        video: true,
                        maxLength: '6',
                        debug: true
                    }
                }
            },

            currentQuestion: {},
            overlay: false,
            count: 5,
            spinner: false,
            currTime: '00:00',
            retry : false
        }
    },

    mounted() {
        console.log(document.getElementById('myVideo'))
        document.getElementById('myVideo').addEventListener('ended',myHandler,false);
        var app2 = this;
        function myHandler(e) {
            if(!e) { e = window.event; }
            app2.options.bigPlayButton = true;
            app2.options.bigPauseButton = false;
            // location.reload();
        }
        this.options.plugins.record.maxLength= this.warmup=="true"?'6':'60';
        this.currentQuestion = JSON.parse(this.question);
        this.player = videojs('myVideo', this.options, () => {
            // print version information at startup
            let msg = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ' and recordrtc ' + RecordRTC.version;
            videojs.log(msg);
        });

        this.player.on('timeupdate', function() {
            console.log(this.currentTime());
        });

        this.player.on('ended', function() {
        });

        if (this.currentQuestion.video) {
            this.options.bigPlayButton = true;
            this.isRetakeDisabled = false;
            this.player.src(`/${this.currentQuestion.video}`);
        }

        // error handling
        this.player.on('deviceReady', () => {
            this.player.record().start();
        });
        this.player.on('deviceError', () => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: this.player.deviceErrorCode
            });
        });
        this.player.on('error', (element, error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            });
        });
        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            this.isPauseDisabled = false;
            this.isStopRecording = false;
        });
        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            this.isSaveDisabled = false;
            this.isStartRecording = true;
            this.isStopRecording = true;
            this.isResumeDisabled = true;
            this.isPauseDisabled = true;
            this.player.record().stopDevice();
            this.options.bigPlayButton = true;
            // document.querySelectorAll('.vjs-play-control').style="none";

            let elements = document.querySelectorAll('.vjs-play-control')

            elements.forEach((item) => {
                item.style.display = 'none'
            })
            
        });
        // setInterval(()=>{
        //     console.log(this.player.currentTime())
        // },1000)
        //after video end
        this.player.on('finishVideo', () => {
            this.options.bigPlayButton = true;
            this.options.bigPauseButton = false;
        });
    },
    methods: {
        counter(){
            this.count--
            if(this.count <1){
                clearInterval(this.interval)
            }
        },
        startRecording() {
            this.overlay = true;
            this.count = 5;
            this.interval = setInterval(this.counter,1000)
            setTimeout(this.startOriRecording,6000)
            
        },
        startOriRecording(){
            this.overlay = false;
            this.isStartRecording = true;
            this.isRetakeDisabled = false;
            this.player.record().getDevice();
        },
        submitVideo() {
            this.retry = false;
            this.bigPlayButton = false;
            this.spinner = true ;
            this.isSaveDisabled = true;
            let data = this.player.recordedData;
            let formData = new FormData();
            formData.append('warmup',this.warmup);
            formData.append('chunk', this.chunk);
            formData.append('video', data, data.name);
            formData.append('question_id', this.currentQuestion.id);

            this.submitText = "Uploading";
            this.player.record().stopDevice();
            // console.log(this.warmup)
            // console.log(formData)
            axios({
                method: "post",
                url: this.upload_url,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(
                res => {
                    if (res.status === 200) {
                        this.submitText = "Upload Complete";
                        this.spinner = false ;
                        this.retry = false;
                        window.location.reload();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: "Upload Failed"
                        });
                        this.spinner = false ;
                        this.submitText = "Upload Failed";
                    }
                }
            ).catch(
                error =>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Upload Failed"
                    });
                    this.spinner = false ;
                    this.submitText = "Upload Failed";
                    this.retry = true;
                }
            );
        },
        resumeRecording() {
            this.isResumeDisabled = true;
            this.isPauseDisabled = false;
            this.player.record().resume();
        },
        pauseRecording() {
            this.isPauseDisabled = true;
            this.isResumeDisabled = false;
            this.player.record().pause();
        },
        stopRecording() {
                this.isSaveDisabled = true;
                this.isStartRecording = true;
                this.isResumeDisabled = true;
                this.isPauseDisabled = true;
                this.player.record().stop();
        },
        startOriReRecording(){
            this.overlay = false;
            this.isSaveDisabled   = true;
            this.isStartRecording = true;
            this.isResumeDisabled = true;
            this.isPauseDisabled  = false;
            this.submitText       = "Accept";
            this.player.record().getDevice();
            this.retake += 1;
            this.player.record().start();
        },
        retakeVideo() {
            this.options.bigPlayButton = false;
            this.options.bigPauseButton = false;
            this.overlay = true;
            this.count = 5;
            this.interval = setInterval(this.counter,1000)
            setTimeout(this.startOriReRecording,6000)
            
        },
        playVideo(){
            // console.log(this.player.duration())
            this.currTime = this.player.currentTime();
            this.options.bigPauseButton = true;
            this.options.bigPlayButton = false;
            this.player.play()
        },
        pauseVideo(){
            this.options.bigPauseButton = false;
            this.options.bigPlayButton = true;
            this.player.pause()
        }
        // retakeVideo() {
        //     this.isSaveDisabled   = true;
        //     this.isStartRecording = true;
        //     this.isResumeDisabled = true;
        //     this.isPauseDisabled  = false;
        //     this.submitText       = "Accept";

        //     this.retake += 1;
        //     this.player.record().start();
        // }
    },
    watch: {
        currTime() {
            // console.log("=======")
            // console.log(this.currTime);
        }
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>

<style scoped>
    .video_recor_area {
        padding-top: 5rem;
        padding-bottom: 6rem;
    }
    .video_recor_area #myVideo {
        width: 100%;
        height: 100%;
    }
    .video_recorder_wrapper{
        position:relative;
    }
    .overlay{
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        width: 100%;
        height: 92%;
        background: #3D4049;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .overlay p{
        padding-top: 30px; 
        font-size: 48px;
        color: #fff;
    }

    .qs_top_block p{
        font-size: 36px;
    }
    .gray_color_background{
        color: #c1c1c1 !important;
        background-color: #5c5c5c !important;
    }
    .green_color_background{
        background-color: green !important;
    }
    .green_color_background:hover{
        background-color: #133c7e !important;
    }
    /* .btn_accept{
        background-color: #133c7e !important;
    } */

    .red_color_background{
        background-color: #ff0000;
    }
    .red_color_background:hover{
        background-color: #133c7e !important;
    }

    .btn_re-record:hover{
        background-color: #5c5c5c !important;
    }

    .recorder_review_button button.btn_re-record, .recorder_review_button a.btn_re-record {
    color: #c1c1c1 !important;
    background-color: #5c5c5c;
    }

    .video-js .vjs-current-time, .vjs-no-flex .vjs-current-time {
        display: block !important;
    }
</style>