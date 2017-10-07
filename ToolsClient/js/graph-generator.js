var s, 
dragListener;

var g = {
	nodes: [],
	edges: []
}

for (var i = 0; i < 3; i++)
{
	g.nodes.push({
		id: 'n' + i,
		label: 'Node ' + i,
		x: Math.random(),
		y: Math.random(),
		size: 10,
		color: (i == 0) ? "#FFA500" : '#666',
		description: ""
	})
}

for (i = 0; i < 5; i++)
	g.edges.push({
		id: 'e' + i,
		source: 'n' + (Math.random() * 3 | 0),
		target: 'n' + (Math.random() * 3 | 0),
		size: 1,
		color: '#ccc'
	});

s = new sigma({
	graph: g,
	container: 'sigma-graph',
});

dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

dragListener.bind('startdrag', function(event) {
	console.log(event);
});
dragListener.bind('drag', function(event) {
	console.log(event);
});
dragListener.bind('drop', function(event) {
	console.log(event);
});
dragListener.bind('dragend', function(event) {
	console.log(event);
});

s.bind('doubleClickNode', (e) => {
	console.log(e);
	let id = e.data.node.id;
	$(".id-data").attr("id", id);
	$("#title-text").val(e.data.node.label);	
	$("#description-text").val(e.data.node.description);
	$("#InstanceModal").modal();
})

$("#submitForm").on("click", (e) => {
	event.preventDefault();
	console.log("Submit event triggered by form");
	s.graph.nodes().forEach((node) => {
		if(node.id === $(".id-data").attr("id")){
			node.label = $("#title-text").val();
			node.description = $("#description-text").val();
		}
	});

	s.refresh();
});