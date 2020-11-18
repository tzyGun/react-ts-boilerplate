import SimpleHTTPServer
import SocketServer
import os
dist_dir = os.path.join(os.path.dirname(__file__), 'dist')
PORT = 8000
os.chdir(dist_dir)
Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
