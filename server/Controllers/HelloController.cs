using Microsoft.AspNetCore.Mvc;

[Route("api/hello")]
[ApiController]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello, World!");
    }
}