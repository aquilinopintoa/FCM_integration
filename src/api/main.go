package main

import (
	"runtime"

	"./server"
)

func main() {
	runtime.GOMAXPROCS(3)

	server.Start()
}
