
        const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backwar = document.querySelector('#backwar')
        const $forward = document.querySelector('#forward')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click' , handlePause)

        function handlePlay() {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al boton de play')
        } 
        
        function handlePause() {
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
            console.log('le diste click al boton de pause')
        }


        $backwar.addEventListener('click', handleBackwar)

        function handleBackwar() {
            $video.currentTime = $video.currentTime - 10
            console.log('Para atras 10 segundos', $video.currentTime)
        }

        $forward.addEventListener('click', handleForward)

        function handleForward() {
            $video.currentTime = $video.currentTime + 10
            console.log('Para adelante 10 segundos', $video.currentTime)
        }

        const $progress = document.querySelector('#progress')
        $video.addEventListener('loadedmetadata', handleLoader)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoader() {
            $progress.max = $video.duration
            console.log('Ha cargado el video', $video.duration)
        }

        function handleTimeUpdate() {
            $progress.value = $video.currentTime
            console.log('tiempo actual', $video.currentTime)
        }

        $progress.addEventListener('input', handleInput)

        function handleInput() {
            $video.currentTime = $progress.value
             console.log($progress.value)
        }