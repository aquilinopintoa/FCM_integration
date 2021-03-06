package server

import (
	"fmt"
	"html/template"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/labstack/echo"
)

type Template struct {
	templates *template.Template
}

var is_up bool = false
var Instance = echo.New()

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func Index(c echo.Context) error {
	return c.File("server/public/views/index.html")
}

func Restart() {
	fmt.Println(is_up)
	if Instance != nil {
		Instance.Close()
		Start()
	}
}

func Start() {

	files, err := ioutil.ReadDir(".")

	if err != nil {
		fmt.Println(err)
	}

	for _, file := range files {
		fmt.Println(file.Name())
	}

	t := &Template{
		templates: template.Must(template.ParseGlob("server/public/views/*.html")),
	}

	Instance.Renderer = t

	// config statics file
	Instance.Static("/", "src/client/statics")

	// config route api
	Instance.GET("/api/aquilino", func(c echo.Context) error {
		fmt.Println("test")
		return c.String(http.StatusOK, "Hello, goland World aquilino!")
	})

	Instance.GET("/api/hello", func(c echo.Context) error {
		fmt.Println("test")
		return c.String(http.StatusOK, "Hello, goland World!")
	})

	// config route app web
	Instance.GET("/", Index)

	is_up = true
	Instance.Logger.Fatal(Instance.Start(":1323"))

}
