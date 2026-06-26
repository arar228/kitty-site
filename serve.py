import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

class NoCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
    directory = sys.argv[2] if len(sys.argv) > 2 else "."
    import os
    os.chdir(directory)
    HTTPServer(("127.0.0.1", port), NoCache).serve_forever()
