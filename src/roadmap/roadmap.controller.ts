import RoadmapService from './roadmap.service';

class roadmapController {
  private roadmapService: RoadmapService;

  constructor(roadmapService: RoadmapService) {
    this.roadmapService = roadmapService;
  }

  async handleWebSocketConnection(ws: WebSocket, userPrompt: string) {
    try {
      await this.roadmapService.create(userPrompt, (data) => {
        console.log(userPrompt);
        ws.send(data);
      });
    } catch (error) {
      ws.send(JSON.stringify({ error: `${error}` }));
    }
  }
}

export default roadmapController;
